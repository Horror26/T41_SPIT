const mongoose = require("mongoose");
const { Schema } = mongoose;

const TransactionSchema = new Schema({
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

const Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction;
