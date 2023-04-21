import mongoose from "mongoose";

//define a schema
const Schema = mongoose.Schema;

const clientsDetailsSchema = new Schema(
  {
    name: String,
    phoneNumber: String,
    service: String,
    date: String,
    time: String,
  },

  { collection: "clientsDetails" }
);

//compile model for schema
const Model = mongoose.model("Model", clientsDetailsSchema);

export default Model;
