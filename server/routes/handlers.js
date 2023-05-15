import express from "express";
import nodemailer from "nodemailer";
import Model from "../models/clientModel.js";
export const router = express.Router();
import * as dotenv from "dotenv";
dotenv.config();

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

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

/** POST REQUESTS */
router.post("/add", async (req, res) => {
  try {
    const client = await Model.create({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      service: req.body.service,
      date: req.body.date,
      time: req.body.time,
      message: req.body.message,
    });

    console.log(client);
    res.status(200).json({
      success: true,
      payload: client,
    });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: password,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "beatrice.stanila@gmail.com",
      to: "beatrice.stanila@gmail.com",
      subject: "New Booking 💜",
      html: `<p>Hi Cosmina</p>
               <p>You have a new appointment with ${client.name} on ${client.date} at ${client.time} for ${client.service}.  </p>
               <p>Phone number: ${client.phoneNumber}</p>
               <p>Message: ${client.message}</p>
               <p>Have fun! </p>`,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});
