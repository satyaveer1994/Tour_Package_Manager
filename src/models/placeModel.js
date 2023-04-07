const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
  {
    city: { type: String, required: true },
    state: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Place", placeSchema);
