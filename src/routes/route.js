const express = require("express");
const router = express.Router();
const packagController = require("../controllers/packageController");
const hotelController = require("../controllers/hotelController");
const placeController = require("../controllers/placeController");
const restaurantController = require("../controllers/restaurantController");

//Add_hotel

router.post("/addHotel", hotelController.createHotel);

//Add_place
router.post("/addplace", placeController.createPlace);

//Add_restaurant
router.post("/addRestaurant", restaurantController.createRestaurant);

// Add_package
router.post("/addPackage", packagController.createPakage);

router.get("/package/:id", packagController.getPackage);

module.exports = router;
