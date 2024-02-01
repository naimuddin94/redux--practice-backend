require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("connecting to database");
  await mongoose.connect(process.env.DB_URI, { dbName: process.env.DB_NAME });
  console.log("connected to database");
};

module.exports = connectDB;