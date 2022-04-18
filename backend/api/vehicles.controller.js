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
}
