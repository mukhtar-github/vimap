import InfoDAO from "../dao/infoDAO.js"


export default class InfoController {
    static async apiPostInfo(req, res, next) {
        try {
            const vehicleId = req.body.vehicle_id
            const info = req.body.text
            const userInfo = {
                name: req.body.name,
                _id: req.body.user_id
            }
            // const insuranceDate = req.body.insurance_date
            // const insuranceId = req.body.insurance_id
            // const accidentHistory = req.body.accident_history
            const date = new Date()

            const infoResponse = await InfoDAO.addInfo(
                vehicleId,
                userInfo,
                info,
                // insuranceDate,
                // insuranceId,
                // accidentHistory,
                date
            )
            res.json({ status: "Success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiUpdateInfo(req, res, next) {
        try {
            const infoId = req.body.info_id
            const text = req.body.text
            const userId = req.body.user_id
            const date = new Date()

            const infoResponse = await InfoDAO.updateInfo(
                infoId,
                userId,
                text,
                date
            )

            var { error } = infoResponse
            if (error) {
                res.status(400).json({ error })
            }

            if (infoResponse.modifiedCount === 0) {
                throw new Error(
                    "Unable to update info - user may not be original poster!"
                )
            }

            res.json({ status: "Success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiDeleteInfo(req, res, next) {
        try {
            const infoId = req.query.id
            const userId = req.body.user_id // In production we use authentication method to be sure it's same user. We should not include anything in the body of delete request.
            const infoResponse = await InfoDAO.deleteInfo(
                infoId,
                userId
            )
            console.log(infoId)
            res.json({ status: "Success"});
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}
