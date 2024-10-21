const mongoose = require("mongoose");

const CarrierSchema = new mongoose.Schema(
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
    dotNumber: {
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
module.exports = mongoose.model("Carrier", CarrierSchema);
