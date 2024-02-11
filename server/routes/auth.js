const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/user");

router.post(
  "/authenticate",
  [body("email", "Enter a valid email").isEmail()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, picture } = req.body;
    try {
      let user = await User.findOne({ email });

      if (user) {
        res.status(200).send("Authenticated");
      } else {
        user = await User.create({
          name: name,
          email: email,
          picture: picture,
        });
        res.status(200).send("Created");
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error occured");
    }
  }
);

router.get("/fetchallusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occured");
  }
});

router.put("/updateverified", async (req, res) => {
  const { id } = req.body;
  try {
    let user = await User.findById(id);
    if (!user) {
      return res.status(404).send("Not Found");
    }

    user = await User.findByIdAndUpdate(
      id,
      { verified: !user.verified },
      { new: true }
    );
    res.json({ user });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
