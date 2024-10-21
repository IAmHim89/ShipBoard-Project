//! Dotenv initialize
require("dotenv").config();

//! express variable
const express = require("express");

//! app variable
const app = express();

//app(express) initialize
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//! cors variable
const cors = require("cors");

//app(cors) initializ
app.use(
  cors({
    credentials: true,
    orign: ["http://localhost:5173"],
  })
);

const carrierValidation = require("./Middleware/carriervalidate");

//? Carrier controller
const carrierController = require("./Controllers/carrierController");

//?carriercontroller path
app.use("/carrier", carrierController);

//! mongoose variable
const mongoose = require("mongoose");

//! DOTENV initialize through MONGODB variable
const MONGODB = process.env.MONGODB_URL + process.env.MONGODB_NAME;

//Mongoose variable connected through MONGODB
mongoose.connect(MONGODB);

//!Database connection initializement through mongoose
const db = mongoose.connection;

//! LocalHost initialization
const PORT = process.env.Port || 8080;

//callback for localHost
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

//callback for mongodb
db.once("open", async () => {
  console.log("*".repeat(10));
  console.log("Successfully connected to Database!");
  console.log("*".repeat(10));
});