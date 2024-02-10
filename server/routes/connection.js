const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Connection = require("../models/Connection");

router.post("/add", async (req, res) => {
  const { farmer, lender, amount, start, end, status, repaymentStatus } =
    req.body;
  try {
    await Connection.create({
      farmer: farmer,
      lender: lender,
      amount: amount,
      start: start,
      end: end,
      status: status,
      repaymentStatus: repaymentStatus,
    });
    res.status(200).send("Created");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error occured");
  }
});

router.put("/updateStatus", async (req, res) => {
  const { status, id } = req.body;
  try {
    let connection = await Connection.findById(id);
    if (!connection) {
      return res.status(404).send("Not Found");
    }

    connection = await Connection.findByIdAndUpdate(
      id,
      { $set: { status: status } },
      { new: true }
    );
    res.json({ connection });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occured");
  }
});

router.put("/updateRepaymentStatus", async (req, res) => {
  const { repaymentStatus, id } = req.body;
  try {
    let connection = await Connection.findById(id);
    if (!connection) {
      return res.status(404).send("Not Found");
    }

    connection = await Connection.findByIdAndUpdate(
      id,
      { $set: { repaymentStatus: repaymentStatus } },
      { new: true }
    );
    res.json({ connection });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
