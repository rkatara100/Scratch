const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/userRouter');
const ownerRouter = require('./routes/ownerRouter');
const productRouter = require('./routes/productRouter');



const app = express();
const db = require('./config/connection');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
      res.send("express");
})
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/owners', ownerRouter);



app.listen(3000);
