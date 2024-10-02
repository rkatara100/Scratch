const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/generateToken');


const registerUser = (req, res) => {
      const { email, fullname, password } = req.body;

      try {

            bcrypt.genSalt(10, (err, salt) => {
                  bcrypt.hash(password, salt, async (err, hash) => {

                        if (err) return res.send(err.message);
                        else {

                              const existingUser = await User.findOne({ email });
                              if (existingUser) {
                                    return res.status(400).json({ message: 'Email already in use.' });
                              }

                              const user = await User.create({ fullname, email, password: hash });

                              let token = generateToken(user);
                              res.cookie("token", token);
                              res.send("User Created Successfully");
                        }
                  })

            })

      } catch (error) {
            // Handle validation errors or other issues
            console.error(error.message);
      }
};


const loginUser = async (req, res) => {
      let { email, password } = req.body;

      let user = await User.findOne({ email });
      if (!user) return res.send("Something went wrong with Email or Password !");

      bcrypt.compare(password, user.password, (err, result) => {

            if (result) {
                  let token = generateToken(user);
                  res.cookie("token", token);
                  res.send("you can can login");
            }
            else {
                  return res.send("Something went wrong with Email or Password !");
            }
      })

};


// const logoutUser = (req, res) => {

// }


module.exports = { registerUser, loginUser };