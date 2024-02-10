const mongoose = require("mongoose");
const { Schema } = mongoose;

const FarmerSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: { type: String },
  landsize: { type: Number },
  location: { type: String },
  assests: { type: Number },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
});
const Farmer = mongoose.model("Farmer", FarmerSchema);
module.exports = Farmer;
