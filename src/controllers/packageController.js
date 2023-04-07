const hotelModel = require("../models/hotelModel");
const packageModel = require("../models/packageModel");
const placeModel = require("../models/placeModel");
const restaurantModel = require("../models/restaurantModel");

const createPakage = async (req, res) => {
  const { name, duration, numPeople, place, hotel, restaurant } = req.body;

  // Validate input
  if (!name || !duration || !numPeople || !place || !hotel || !restaurant) {
    return res
      .status(400)
      .send({ status: false, msg: "Missing required fields" });
  }

  // Create new package
  try {
    const package = await packageModel.create({
      name,
      duration,
      numPeople,
      place,
      hotel,
      restaurant,
    });
    res.status(201).json(package);
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, msg: error.msg });
  }
};

const getPackage = async (req, res) => {
  const { id } = req.params;

  try {
    const package = await packageModel
      .findById(id)
      .populate("place")
      .populate("hotel")
      .populate("restaurant");
    if (!package) {
      return res.status(400).send({ status: false, msg: "Package not found" });
    }
    res.json(package);
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, msg: error.msg });
  }
};

module.exports = { createPakage, getPackage };
