const express = require('express');
const router = express.Router();
const upload = require('../config/multer-config');
const Product = require('../models/product');

router.post('/create', upload.single("image"), async (req, res) => {
      try {
            let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body; // Fix typo from pricecolor to panelcolor

            // If you want to store the image as a URL, adjust this section
            let product = await Product.create({
                  image: req.file.buffer, // If storing buffer; consider using URL instead
                  name,
                  price,
                  discount,
                  bgcolor,
                  panelcolor, // Adjusted the key to match your model
                  textcolor,
            });

            req.flash("success", "Product created successfully");
            res.redirect('/owners/admin'); // Redirect after successful creation
      } catch (err) {
            req.flash("error", err.message); // Flash the error message
            res.redirect('/owners/admin'); // Redirect back to the admin page or appropriate route
      }
});

module.exports = router;
