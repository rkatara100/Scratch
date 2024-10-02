const jwt = require('jsonwebtoken');

const User = require('../models/user');



const isLoggedIn = ('/', async (req, res, next) => {

      let token = req.cookies.token;
      if (!token) {
            req.flash("error", "you need to login first");
            return res.redirect('/');
      }

      try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            let user = await User.findOne({ email: decoded.email }).select("-password");
            req.user = user;
            next();
      }
      catch {
            if (err)
                  return res.status(401).json({ message: 'Invalid token' });
      }
})

module.exports = { isLoggedIn };