//! validate carrier variables
const jwt = require("jsonwebtoken");
const Carrier = require("../Models/carrierModel");

const carrierValidate = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    console.log("current header provided with request", auth);
    if (!auth) throw new Error("Unauthorized");

    const token = auth.split(" ")[1];
    if (!auth) throw new Error("Unauthorized");

    //Token status

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    console.log("decrypted payload", decoded);

    //verify Carrier

    const carrier = await Carrier.findById(decoded.id);

    if (!carrier) throw new Error("Carrier not Found!");
    console.log("Carrier making request:", carrier);
    req.carrier = carrier;
    return next();
  } catch (err) {
    res.status(500).json({
      Error: err.message,
    });
  }
};
module.exports = carrierValidate;
