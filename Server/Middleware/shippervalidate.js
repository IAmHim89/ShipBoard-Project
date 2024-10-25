const jwt = require("jsonwebtoken");
const Shipper = require("../Models/shipperModel");

const shipperValidation = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    console.log("current header provided with request", auth);
    if (!auth) throw new Error("Unauthorized");

    const token = auth.split(" ")[1];
    if (!auth) throw new Error("Unauthorized");

    //Token Status

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    console.log("decrypted payload", decoded);

    console.log(decoded);
    const shipper = await Shipper.findById(decoded.id);

    if (!shipper) throw new Error("Shipper not found!");
    console.log("Shipper making request:", shipper);
    req.shipper;
    return next();
  } catch (err) {
    res.status(500).json({
      Error: err.message,
    });
  }
};

module.exports = shipperValidation;
