// models/User.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
      fullname: {
            type: String,
            minLength: 3,
            trim: true,
            required: true,
      },
      email: {
            type: String,
            required: true,
            unique: true,
      },
      password: {
            type: String,
            required: true,
      },
      cart: {
            type: Array, // Assuming the cart contains a list of item IDs or names
            default: [],
      },
      orders: {
            type: Array, // Assuming orders are arrays of item IDs or names
            default: [],
      },
      contact: {
            type: Number
      },
      picture: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
