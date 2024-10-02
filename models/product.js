// models/Product.js

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true,
      },
      price: {
            type: Number,
            required: true,
      },
      discount: {
            type: Number,
            default: 0, // Default discount is 0%
      },
      image: {
            type: Buffer
      },
      bgcolor: {
            type: String, // Hex color code or CSS color name
            default: '#FFFFFF', // Default to white
      },
      panelcolor: {
            type: String, // Hex color code or CSS color name
            default: '#F0F0F0', // Default light gray
      },
      textcolor: {
            type: String, // Hex color code or CSS color name
            default: '#000000', // Default to black
      },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
