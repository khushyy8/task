const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');

const User = require("../../schema/registershema")

router.post("/authentication" , async (req, res, next) => {
  
    const { email, password } = req.body
    console.log(req.body)
    // Check if username and password is provided
    if (!email || !password) {
      return res.status(400).json({
        message: "Username or Password not present",
      })
    }
    try {
      const user = await User.findOne({ email, password })
      if (!user) {
        res.status(200).json({
          status : false,
          message: "User not found",
        })
      } else {
        var token = jwt.sign({ email: user.email,id: user.id,role:user.role, userName : user.fname }, process.env.SECRET_KEY, { expiresIn: '12h' });
        let validateuser= {
          token:token,
          data:{ email: user.email,id: user.id,role:user.role, userName : user.fname }
        }
        res.status(200).json({
          status : true,
          message: "Login successful",
          validateuser,
        })
      }
    }
     catch (error) {
      res.status(400).json({
        status : false,
        message: "An error occurred",
        error: error.message,
      })
    }
  })

module.exports = router;