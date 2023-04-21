import express from "express";

import Model from "../models/clientModel.js";
export const router = express.Router();

/** GET REQUESTS */
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

/** POST REQUESTS */
router.post("/add", async (req, res) => {
  try {
    const client = await Model.create({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      service: req.body.service,
      date: req.body.date,
      time: req.body.time,
    });

    console.log(client);

    res.status(200).json({
      success: true,
      payload: client,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});
