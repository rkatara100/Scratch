// models/User.js

const mongoose = require('mongoose');


const ownerSchema = new mongoose.Schema({
      fullname: {
            type: String,
            required: true,
      },
      email: {
            type: String,
            required: true,
      },
      password: {
            type: String,
            required: true,
      },
      cart: {
            type: Array, // Assuming the cart contains a list of item IDs or names
            default: [],
      },
      isAdmin: {
            type: Boolean,
            default: false,
      },
      orders: {
            type: Array, // Assuming orders are arrays of item IDs or names
            default: [],
      },
      contact: {
            type: Number,
            default: 0
      },
      picture: String
});

const User = mongoose.model('User', ownerSchema);

module.exports = User;
