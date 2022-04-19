import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let vehicles;

export default class VehiclesDAO {
    static async injectDB(conn) {
        if (vehicles) {
            return
        }
        try {
            vehicles = await conn.db(process.env.VIMAPP_NS).collection("vehicles")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in vehiclesDAO: ${e}`
            )
        }
    }

    static async getVehicles({
        filters = null,
        page = 0,
        vehiclesPerPage = 20
    } = {}) {
        let query
        if (filters) {
            if ("vehicle_id" in filters) {
                query = { $text: { $search: filters["vehicle_id"] } }
            } else if ("model" in filters) {
                query = { "model": { $eq: filters["model"] } }
            } else if ("attached_to" in filters) {
                query = { "attached_to": { $eq: filters["attached_to"] } }
            }
        }

        let cursor

        try {
            cursor = await vehicles
            .find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { vehiclesList: [], totalNumVehicles: 0 }
        }

        const displayCursor = cursor.limit(vehiclesPerPage).skip(vehiclesPerPage * page)

        try {
            const vehiclesList = await displayCursor.toArray()
            const totalNumVehicles = await vehicles.countDocuments(query)

            return { vehiclesList, totalNumVehicles }
        } catch (e) {
            console.error(
                `Unable to convert cursor to array or problem counting documents, ${e}`
            )
            return { vehiclesList: [], totalNumVehicles: 0 }
        }
    }

    static async getVehicleByID(id) {
        try {
          const pipeline = [
            {
                $match: {
                    _id: new ObjectId(id)
                }
            },
                  {
                      $lookup: {
                          from: "info_update",
                          let: {
                              id: "$_id",
                          },
                          pipeline: [
                              {
                                  $match: {
                                      $expr: {
                                          $eq: ["$vehicle_id", "$$id"],
                                      },
                                  },
                              },
                              {
                                  $sort: {
                                      date: -1,
                                  },
                              },
                          ],
                          as: "infoUpdate",
                      },
                  },
                  {
                      $addFields: {
                          infoUpdate: "$infoUpdate",
                      },
                  },
              ]
          return await vehicles.aggregate(pipeline).next()
        } catch (e) {
          console.error(`Something went wrong in getVehiclesByID: ${e}`)
          throw e
        }
    }
    
    static async getModels() {
        let models = []
        try {
          models = await vehicles.distinct("model")
          return models
        } catch (e) {
          console.error(`Unable to get models, ${e}`)
          return models
        }
    }
}

