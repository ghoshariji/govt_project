// const industry = require("../models/industry");
const User = require("../models/industry");
const jwt = require("jsonwebtoken");
const mailSender = require("../tester");
const bcrypt = require("bcryptjs")
require("dotenv").config()
const register = async (req, res) => {
  // const { name, email, password, dob, phone_number } = req.body;

  // const userExists = await User.findOne({ email });

  // if (userExists) {
  //   //res.status(400);
  //   res.status(400).json({ error: "User already exists" });
  //   return;
  // }

  // const user = await User.create({
  //   name,
  //   email,
  //   password,
  //   dob,
  //   phone_number,
  // });

  // if (user) {
  //   generateToken(res, user._id);
  //   res.status(201).json({
  //     _id: user._id,
  //     name: user.name,
  //     email: user.email,
  //     isAdmin: user.isAdmin,
  //     token: generateToken(user._id),
  //   });
  //   mailSender(email,name);
  //   console.log("Email sent, kindly check");
  // } else {
  //   res.status(400);
  //   throw new Error("Invalid user data");
  // }

  try {
    const { name, email } = req.body;
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(200).send({
        message: "User already exist",
        success: false,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hassPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hassPassword;
    const newUser = await new User(req.body);
    const token = jwt.sign({ userId: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "30d",
    });
    await newUser.save();
    mailSender(email,name);
    return res.status(200).send({
      message: "Register successfully",
      success: true,
      token: token,
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isApproved: newUser.isApproved,
    });
  } catch (error) {
    return res.status(200).send({
      message: error.message,
      success: false,
    });
  }
};

const login = async (req, res) => {
  // const { email, password } = req.body;
  // const user = await User.findOne({ email });

  // if (user && (await user.matchPassword(password))) {
  //   generateToken(res, user._id);

  //   res.json({
  //     _id: user._id,
  //     name: user.name,
  //     email: user.email,
  //     isAdmin: user.isAdmin,
  //     token: generateToken(user._id),
  //   });
  // } else {
  //   res.status(401);
  //   throw new Error("Invalid email or password");
  // }

  try {
    console.log(req.body)
    const userExit = await User.findOne({ email: req.body.email });
    if (!userExit) {
      return res.status(400).send({
        message: "User not exit",
        success: false,
      });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      userExit.password
    );
    console.log(validPassword)
    if (validPassword) {
      const token = jwt.sign({ userId: userExit._id }, process.env.SECRET_KEY, {
        expiresIn: "30d",
      });
      return res.status(201).send({
        message: "Login successfully",
        success: true,
        token: token,
        isAdmin: userExit.isApproved,
        _id: userExit._id,
        name: userExit.name,
        email: userExit.email,
      });
    } else {
      return res.status(401).send({
        message: "Invalid crediantials",
        success: false,
      });
    }
  } catch (error) {
    return res.status(501).send({
      message: error.message,
      success: false,
    });
  }
};

// const generateToken = (res, id) => {
//   const token = jwt.sign({ id }, "iada", {
//     expiresIn: "30d",
//   });

//   return token;
// };

module.exports = { register, login };
