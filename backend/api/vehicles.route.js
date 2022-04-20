import express from "express"
import VehiclesCtrl from "./vehicles.controller.js"
import InfoCtrl from './info.controller.js'

const router = express.Router()

router.route("/").get(VehiclesCtrl.apiGetVehicles)
router.route("/id/:id").get(VehiclesCtrl.apiGetVehicleById)
router.route("/models").get(VehiclesCtrl.apiGetVehicleModels)

router
    .route("/infoUpdate")
    .post(InfoCtrl.apiPostInfo)
    .put(InfoCtrl.apiUpdateInfo)
    .delete(InfoCtrl.apiDeleteInfo)

export default router
