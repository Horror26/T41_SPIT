const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Transactions = require("../models/Transactions");
const Connection = require("../models/Connection");

router.put("/createTransactions", async (req, res) => {
  try {
    const { farmer, amount, payee } = req.body;
    const transactions = await Transactions({
      farmer,
      amount,
      payee,
      status: true,
    });
    await transactions.save();
    let transact = await Connection.findOne({ farmer, lender: payee });
    let invtransact = await Connection.findOne({ lender:farmer, farmer: payee });
    var gt;
    let currentDate = new Date();
    let endDate = new Date(currentDate);
    endDate.setMonth(endDate.getMonth() + 3);
    if (transact)
      gt = await Connection.findOneAndUpdate(
        { farmer, lender: payee },
        {
          amount: transact.amount - amount,
          status: transact.amount - amount === 0 ? "complete" : "pending",
          repayment: transact.amount - amount === 0 ? "complete" : "incomplete",
        },
        { new: true }
      );
    else if (invtransact)
      gt = await Connection.findOneAndUpdate(
        { farmer: payee, lender: farmer },
        { amount: invtransact.amount + amount },
        { new: true }
      );
    else
      gt = await Connection({
        lender: farmer,
        farmer: payee,
        amount,
        start: Date.now(),
        end: endDate,
        status: "pending",
        repayment: "incomplete",
      }); //accept rejects
    await gt.save();
    res.json(transactions);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occured");
  }
});

router.put("/fetchTransactions", async (req, res) => {
  try {
    const { farmer } = req.body;
    const transactions = await Transactions.find({ farmer });
    res.json(transactions);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
