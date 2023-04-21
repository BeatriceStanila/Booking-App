import express from "express";

import Model from "../models/clientModel.js";
export const router = express.Router();

router.get("/clients", async (req, res) => {
  try {
    const data = await Model.find();
    console.log(data);
    res.json(data);
  } catch (err) {
    console.log("Error retrieving the data" + err);
    res.status(500).send("Server error");
  }
});

router.get("/", async (req, res) => {
  try {
    const message = "Hi, there. It's working";
    res.send(message);
  } catch (err) {
    console.log("Error retrieving the data" + err);
    res.status(500).send("Server error");
  }
});
