const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Farmer = require("../models/Farmer");

router.post(
  "/add",
  [body("email", "Enter a valid email").isEmail()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, address, landsize, location, assests, phone } = req.body;
    try {
      await Farmer.create({
        email: email,
        address: address,
        landsize: landsize,
        location: location,
        assests: assests,
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
