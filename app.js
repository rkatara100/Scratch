const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/userRouter');
const ownerRouter = require('./routes/ownerRouter');
const productRouter = require('./routes/productRouter');
const indexrouter = require('./routes/index');



//for environemnt variable config setup
const dotenv = require('dotenv');
dotenv.config();


const flash = require('connect-flash');
const expressSession = require('express-session');


const app = express();
const db = require('./config/connection');


app.use(
      expressSession({
            resave: false,
            saveUninitialized: false,
            secret: process.env.EXPRESS_SESSION_SECRET
      })
)
app.use(flash());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexrouter);
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/owners', ownerRouter);



app.listen(3000);
