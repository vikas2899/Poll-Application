const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// @ User Registration

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString(),
    age: req.body.age,
  });

  // Save to database
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// @ User Login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Invalid Credentials");
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET
    );
    const userpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    userpassword !== req.body.password &&
      res.status(401).json("Invalid Credentials");

    // Generate JWT Token
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    const { password, ...otherInfo } = user._doc;
    res.status(200).json({ ...otherInfo, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
