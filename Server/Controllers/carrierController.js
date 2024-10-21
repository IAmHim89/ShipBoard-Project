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
    const [email, password] = req.body; //email and password required

    const carrier = await Carrier.findOne({ email: email }); //carrier email key and value

    if (!email) throw new Error("Incorrect Admin name or password"); //conditional error call for email required

    const passwordMatch = await bcrypt.compare(password, carrier.password); //password required through carrier

    if (!passwordMatch) throw new Error("Password is Incorrect!"); // conditional error call for password required

    //generate a token if the log in is successful
    const token = jwt.sign({ id: carrier._id }, process.env.JWT_SECRET, {
      expiresIn: "1day",
    });
  } catch (err) {
    res.status(500).json({
      Error: err.message,
    });
  }
});

module.exports = router;
