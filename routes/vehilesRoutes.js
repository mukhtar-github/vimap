import express from "express";
import {
  createVehicle,
  deleteVehicle,
  getAllVehicles,
  updateVehicle,
  showStats,
} from "../controllers/vehiclesController.js";

const router = express.Router();

router.route("/").post(createVehicle).get(getAllVehicles);
// place before :id
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteVehicle).patch(updateVehicle);

export default router;
