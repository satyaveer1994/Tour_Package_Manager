const hotelModel = require("../models/hotelModel");

const createHotel = async (req, res) => {
  const { name, address } = req.body;

  // Validate input
  if (!name || !address) {
    return res
      .status(400)
      .send({ status: false, msg: "Missing required fields" });
  }

  // Create new package
  try {
    const package = await hotelModel.create({ name, address });
    res.status(201).json(package);
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, msg: error.msg });
  }
};

module.exports = { createHotel };
