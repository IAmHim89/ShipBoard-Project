//! VAriable calls
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Carrier = require("../Models/carrierModel");

router.post("/signup", async (req, res) => {
  try {
    const newCarrier = await Carrier.create({
      //create new carrier Info for signup
      businessName: req.body.businessName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dotNumber: req.body.dotNumber,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 12), //password hashed and sync'd
    });
    //Token variable to hold token generation
    const token = jwt.sign({ id: newCarrier._id }, process.env.JWT_SECRET, {
      expiresIn: "2days", //token expiration
    });
    res.status(200).json({
      Created: newCarrier, //new carrier info created
      Msg: "Success, Carrier Created!", //Message for carrier created
      Token: token,
    });
  } catch (err) {
    res.status(500).json({
      //conditional error call to check the same carrier wasnt made twice
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
    res.status(200).json({
      Msg: "You have successfully logged In!", // message for succesful login
      Carrier: carrier, //return carrier info
      Token: token, //return token
    });
  } catch (err) {
    res.status(500).json({
      Error: err.message,
    });
  }
});

module.exports = router;
