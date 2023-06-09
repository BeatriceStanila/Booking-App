import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./routes/handlers.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// DB Connection
mongoose.set("strictQuery", false);

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected!");

    // PORT
    const PORT = process.env.PORT || 4000; // backend routing port
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log("DB NOT Connected" + err);
  });

app.use("/", router);
