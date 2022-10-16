const wishesModel = require("../Models/wishesModel");
const { customeResponse } = require("../Middlewares/response");
class Wishes {
  static async create(req, res, next) {
    try {
      const { name, post } = req.body;
      const addWishes = await wishesModel.insert({ name, post });
      const response = await addWishes;
      if (response.acknowledged) {
        const { insertedId } = response;
        const newResponse = await wishesModel.findOne(insertedId);
        next({ code: 201, data: newResponse });
      } else {
        next({ code: 400, error });
      }
    } catch (error) {
      next({ code: 500, error });
    }
  }
  static async findAll(req, res, next) {
    try {
      const dataWishes = await wishesModel.find();
      const response = await dataWishes;
      next({ code: 200, data: response });
    } catch (error) {
      next({ code: 500, error });
    }
  }

  static async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const dataWishes = await wishesModel.findOne(id);
      const response = await dataWishes;
      next({ code: 200, data: response });
    } catch (error) {
      next({ code: 500, error });
    }
  }
}

module.exports = Wishes;
