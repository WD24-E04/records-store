import { Schema, model } from "mongoose";

const RecordSchema = new Schema({
  title: String,
  year: Number,
  artist: String,
  img: String,
  price: Number,
  genre: String,
});

export default model("Record", RecordSchema);
