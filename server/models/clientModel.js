import mongoose from "mongoose";

//define a schema
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const clientsDetailsSchema = new Schema(
  {
    _id: { type: ObjectId },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    service: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
  },
  { collection: "clientsDetails" }
);

//compile model for schema
const Model = mongoose.model("Model", clientsDetailsSchema);

export default Model;
