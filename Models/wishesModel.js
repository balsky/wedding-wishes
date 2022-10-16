const { getData } = require("../Database");
const wishes = getData().collection("wishes");
const { ObjectId } = require("mongodb");

class wishesModel {
  static async find() {
    const getData = await wishes.find().sort({ createdAt: -1 }).toArray();
    return getData;
  }
  static async findOne(id) {
    const getData = await wishes.findOne({ _id: ObjectId(id) });
    return getData;
  }
  static async insert(data) {
    const currentDate = new Date();
    const newWishes = {
      ...data,
      createdAt: currentDate,
      updatedAt: currentDate,
      isDeleted: false,
    };
    const createData = await wishes.insertOne(newWishes);
    return createData;
  }
}

module.exports = wishesModel;
