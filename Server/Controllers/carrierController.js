const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Carrier = require("../Models/carrierModel");

router.post("/signup", async (req, res) => {
  try {
    const newCarrier = await Carrier.create({
      businessName: req.body.businessName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dotNumber: req.body.dotNumber,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 12),
    });

    const token = jwt.sign({ id: newCarrier._id }, process.env.JWT_SECRET, {
      expiresIn: "2days",
    });
    res.status(200).json({
      Created: newCarrier,
      Msg: "Success, Carrier Created!",
      Token: token,
    });
  } catch (err) {
    res.status(500).json({
      Error: err.code === 11000 ? "Admin already exists" : err.message,
    });
  }
});

router.post("/signin", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({
      Error: err.message,
    });
  }
});

module.exports = router;
