import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import VehiclesDAO from "./dao/vehiclesDAO.js"
import infoDAO from "./dao/infoDAO.js"

dotenv.config()

const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000

MongoClient.connect(
        process.env.VIMAPP_DB_URI,
        {
                wtimeoutMS: 2500,
                useNewUrlParser: true
        })
.catch(err => {
        console.error(err.stack)
        process.exit(1)
})
.then(async client => {
	await VehiclesDAO.injectDB(client)
        await infoDAO.injectDB(client)
        app.listen(port, () => {
                console.log(`listening on port ${port}`)
        })
})
