import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let info_update;

export default class InfoDAO {
  static async injectDB(conn) {
    if (info_update) {
      return;
    }
    try {
      info_update = await conn.db(process.env.VIMAPP_NS).collection("info_update");// If the collection doesn't exist MongoDB WILL CREATE ONE FOR US
    } catch (e) {
      console.error(`Unable to establish a collection handle in userDAO: ${e}`);
    }
  }

  static async addInfo(vehicleId, user, info, date) {
    try {
      const infoDoc = {
        name: user.name,
        user_id: user._id,
        date: date,
        text: info,
        vehicle_id: ObjectId(vehicleId)
      };
      return await info_update.insertOne(infoDoc);
    } catch (e) {
      console.error(`Unable to post update: ${e}`);
      return {
        error: e
      };
    }
  }
//insuranceDate, insuranceId, accidentHistory
// insurance_date: insuranceDate,
// insurance_id: insuranceId,
// accident_history: accidentHistory,
  static async updateInfo(infoId, userId, text, date) {
    try {
      const updateResponse = await info_update.updateOne(
        {
        user_id: userId,
        _id: ObjectId(infoId)
      }, {
        $set: {
          text: text,
          date: date
        }
      })
      return updateResponse
    } catch (e) {
      console.error(`Unable to update review: ${e}`)
      return {
        error: e
      }
    }
  }

  static async deleteInfo(infoId, userId) {
    try {
      const deleteResponse = await info_update.deleteOne({
        user_id: userId,
        _id: ObjectId(infoId)
      })
      return deleteResponse
    } catch (e) {
      console.error(`Unable to delete review: ${e}`)
      return {
        error: e
      }
    }
  }
}
