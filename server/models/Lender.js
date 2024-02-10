const mongoose = require("mongoose");
const { Schema } = mongoose;

const LenderSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  min: { type: Number },
  max: { type: Number },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
});
const Lender = mongoose.model("Lender", LenderSchema);
module.exports = Lender;
