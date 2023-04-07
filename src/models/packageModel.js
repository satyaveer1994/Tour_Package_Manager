const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    numPeople: { type: Number, required: true },
    place: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Place",
      required: true,
    },
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      required: true,
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Package", packageSchema);
