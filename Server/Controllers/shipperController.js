const router = require("express").Router();
const Shipper = require("../Models/shipperModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/signup", async (req, res) => {
  try {
    const newShipper = await Shipper.create({
      businessName: req.body.businessName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const token = jwt.sign({ id: newShipper._id }, process.env.JWT_SECRET, {
      expiresIn: "2days",
    });
    res.status(200).json({
      Created: newShipper,
      Msg: "Success, Shipper created!",
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
    const { email, password } = req.body;

    const shipper = await Shipper.findOne({ email: email });

    if (!shipper) throw new Error("Incorrect Admin or password!");

    const passwordMatch = await bcrypt.compare(password, shipper.password);

    if (!passwordMatch) throw new Error("Incorrrect Admin or password!");

    const token = jwt.sign({ id: shipper._id }, process.env.JWT_SECRET, {
      expiresIn: "1day",
    });
    res.status(200).json({
      Msg: "You have Succesfully logged In!",
      Shipper: shipper,
      Token: token,
    });
  } catch (err) {
    err.message;
  }
});

module.exports = router;
