import VehiclesDAO from "../dao/vehiclesDAO.js"

export default class VehiclesController {
  static async apiGetVehicles(req, res, next) {
    const vehiclesPerPage = req.query.vehiclesPerPage ? parseInt(req.query.vehiclesPerPage, 10) : 20
    const page = req.query.page ? parseInt(req.query.page, 10) : 0

    let filters = {}

    if (req.query.model) {
      filters.model = req.query.model
    } else if (req.query.attached_to) {
      filters.attached_to = req.query.attached_to
    } else if (req.query.vehicle_id) {
      filters.vehicle_id = req.query.vehicle_id
    }

    const { vehiclesList, totalNumVehicles } = await VehiclesDAO.getVehicles({
      filters,
      page,
      vehiclesPerPage
    })

    let response = {
      vehicles: vehiclesList,
      page: page,
      filters: filters,
      entries_per_page: vehiclesPerPage,
      total_results: totalNumVehicles
    }
    res.json(response)
  }

  static async apiPostVehicles(req, res, next) {
    try {
      const vehicleModel = req.body.model
      const vehicleYear = req.body.year
      const vehicleChassis = req.body.chassis
      const vehicleTyreSize = req.body.tyre_size
      const registrationNumber = req.body.registration_number
      const attachedTo = req.body.attached_to
      const date = new Date()

      const infoResponse = await VehiclesDAO.addVehicles(
        vehicleModel,
        vehicleYear,
        vehicleChassis,
        vehicleTyreSize,
        registrationNumber,
        attachedTo,
        date
      )
      res.json({ status: "Success" })
    } catch (e) {
    res.status(500).json({ error: e.message })
    }
  }


  static async apiGetVehicleById(req, res, next) {
    try {
      let id = req.params.id || {}
      let vehicle = await VehiclesDAO.getVehicleByID(id)

      if (!vehicle) {
        res.status(404).json({ error: "Not found" })
        return
      }
      res.json(vehicle)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }
    
  static async apiGetVehicleModels(req, res, next) {
    try {
      let models = await VehiclesDAO.getModels()
      res.json(models)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }
}
