const placeModel = require("../models/placeModel");

const createPlace = async (req, res) => {
  const { city, state } = req.body;

  // Validate input
  if (!city || !state) {
    return res
      .status(400)
      .send({ status: false, msg: "Missing required fields" });
  }

  // Create new package
  try {
    const package = await placeModel.create({ city, state });
    res.status(201).json(package);
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, msg: error.msg });
  }
};
module.exports = { createPlace };
