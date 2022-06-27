import Vehicle from "../models/Vehicle.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

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

const deleteVehicle = async (req, res) => {
  return res.send("delete vehicle");
};

const getAllVehicles = async (req, res) => {
  return res.send("get all vehicles");
};

const updateVehicle = async (req, res) => {
  return res.send("update vehicle");
};

const showStats = async (req, res) => {
  return res.send("show stats");
};

export {
  createVehicle,
  deleteVehicle,
  getAllVehicles,
  updateVehicle,
  showStats,
};
