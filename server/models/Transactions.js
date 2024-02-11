const mongoose = require("mongoose");
const { Schema } = mongoose;

const ConnectionSchema = new Schema({
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "farmer",
  },
  amount: { type: Number },
  payee: { type: mongoose.Schema.Types.ObjectId },
  date: {
    type: Date,
    default: Date.now(),
  },
  status: { type: Boolean, default: false },
});

const Connection = mongoose.model("Connection", ConnectionSchema);
module.exports = Connection;
