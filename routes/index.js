const express = require('express');
const Product = require('../models/product');
const { isLoggedIn } = require('../middlewares/isLoggedin');

const router = express.Router();

router.get('/', (req, res) => {
      let error = req.flash('error');
      res.render('index', { error });
});

router.get('/shop', isLoggedIn, async (req, res) => {

      let products = await Product.find({});
      console.log(products);
      res.render('shop', products);
})

router.get('/logout', isLoggedIn, (req, res) => {
      res.render('shop');
});


module.exports = router;