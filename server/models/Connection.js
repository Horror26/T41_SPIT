const mongoose = require("mongoose");
const { Schema } = mongoose;

const ConnectionSchema = new Schema({
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "farmer",
  },
  lender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "lender",
  },
  amount: { type: Number },
  start: { type: Date },
  end: { type: Date },
  status: { type: String },
  repaymentStatus: { type: String },
});

const Connection = mongoose.model("Connection", ConnectionSchema);
module.exports = Connection;
