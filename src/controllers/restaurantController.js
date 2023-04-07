const restaurantModel = require("../models/restaurantModel");

const createRestaurant = async (req, res) => {
  const { name, cuisine } = req.body;

  // Validate input
  if (!name || !cuisine) {
    return res
      .status(400)
      .send({ status: false, msg: "Missing required fields" });
  }

  // Create new package
  try {
    const package = await restaurantModel.create({ name, cuisine });
    res.status(201).json(package);
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, msg: error.msg });
  }
};

module.exports = { createRestaurant };
