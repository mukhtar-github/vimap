import Vehicle from "../models/Vehicle.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";
import mongoose from "mongoose";
import moment from "moment";

const createVehicle = async (req, res) => {
  const { make, registration, chassisNumber, insuranceDate, attachedTo } =
    req.body;

  if (
    !make ||
    !registration ||
    !chassisNumber ||
    !insuranceDate ||
    !attachedTo
  ) {
    throw new BadRequestError("Please Provide All Values");
  }

  req.body.createdBy = req.user.userId;

  const vehicle = await Vehicle.create(req.body);
  res.status(StatusCodes.CREATED).json({ vehicle });
};

const getAllVehicles = async (req, res) => {
  const { search, status, year, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  // add stuff based on condition
  if (status && status !== "all") {
    queryObject.status = status;
  }
  if (year && year !== "all") {
    queryObject.year = year;
  }
  if (search) {
    queryObject.make = { $regex: search, $options: "i" };
  }

  // NO AWAIT
  let result = Vehicle.find(queryObject);

  // chain sort conditions
  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("make");
  }
  if (sort === "z-a") {
    result = result.sort("-make");
  }

  const totalVehicles = await result;

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit; //10
  result = result.skip(skip).limit(limit);
  // 75
  // 10 10 10 10 10 10 10 5
  const vehicles = await result;

  res
    .status(StatusCodes.OK)
    .json({ vehicles, totalVehicles: vehicles.length, numOfPages: 1 });
};

const updateVehicle = async (req, res) => {
  const { id: vehicleId } = req.params;

  const { make, registration, chassisNumber, insuranceDate, attachedTo } =
    req.body;

  if (
    !make ||
    !registration ||
    !chassisNumber ||
    !insuranceDate ||
    !attachedTo
  ) {
    throw new BadRequestError("Please Provide All Values");
  }

  const vehicle = await Vehicle.findOne({ _id: vehicleId });

  if (!vehicle) {
    throw new NotFoundError(`No vehicle with id ${vehicleId}`);
  }

  // check permissions

  checkPermissions(req.user, vehicle.createdBy);

  const updatedVehicle = await Vehicle.findOneAndUpdate(
    { _id: vehicleId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(StatusCodes.OK).json({ updatedVehicle });
};

const deleteVehicle = async (req, res) => {
  const { id: vehicleId } = req.params;

  const vehicle = await Vehicle.findOne({ _id: vehicleId });

  if (!vehicle) {
    throw new NotFoundError(`No vehicle with id : ${vehicleId}`);
  }

  checkPermissions(req.user, vehicle.createdBy);

  await vehicle.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Vehicle removed" });
};

const showStats = async (req, res) => {
  let stats = await Vehicle.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    allocated: stats.allocated || 0,
    auctioned: stats.auctioned || 0,
  };

  let monthlyUpdates = await Vehicle.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: {
          year: {
            $year: "$createdAt",
          },
          month: {
            $month: "$createdAt",
          },
        },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } }, // sorted to retrieve the latest six months
    { $limit: 6 },
  ]);

  monthlyUpdates = monthlyUpdates
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      // moment accepts 0-11 in month's count; whereas in mongoBD it's 1-12
      const date = moment()
        .month(month - 1)
        .year(year)
        .format("MMM Y");
      return { date, count };
    })
    .reverse(); // so that the charts should display the data from the oldest to the newest;

  res.status(StatusCodes.OK).json({ defaultStats, monthlyUpdates });
};

export {
  createVehicle,
  deleteVehicle,
  getAllVehicles,
  updateVehicle,
  showStats,
};
