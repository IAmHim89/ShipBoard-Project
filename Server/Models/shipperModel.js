const mongoose = require("mongoose");

const ShipperSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,

      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("shipper", ShipperSchema);
