const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Lender = require("../models/Lender");

router.get("/fetchalllenders", async (req, res) => {
  try {
    const lenders = await Lender.find({});
    res.json(lenders);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occured");
  }
});

router.post(
  "/add",
  [body("email", "Enter a valid email").isEmail()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, name, min, max, phone } = req.body;
    try {
      await Lender.create({
        email: email,
        name: name,
        min: min,
        max: max,
        phone: phone,
      });
      res.status(200).send("Created");
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error occured");
    }
  }
);

module.exports = router;
