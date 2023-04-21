import mongoose from "mongoose";

//define a schema
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const clientsDetailsSchema = new Schema(
  {
    name: String,
    mobileNumber: Number,
    service: String,
    date: Date,
  },

  { collection: "clientsDetails" }
);

//compile model for schema
const Model = mongoose.model("Model", clientsDetailsSchema);

export default Model;
