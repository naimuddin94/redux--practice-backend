const mongoose = require("mongoose");
const userSchema = require("../models/userSchema");
const User = new mongoose.model("User", userSchema);

const getUsers = async (req, res) => {
  try {
    const result = await User.find();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ message: "User saved successfully" });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { getUsers, createUser };
