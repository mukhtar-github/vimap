import Vehicle from "../models/Vehicle.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";
import mongoose from "mongoose";

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
  const vehicles = await Vehicle.find({ createdBy: req.user.userId });

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

  let monthlyUpdates = [];

  res.status(StatusCodes.OK).json({ defaultStats, monthlyUpdates });
};

export {
  createVehicle,
  deleteVehicle,
  getAllVehicles,
  updateVehicle,
  showStats,
};
