const mongoose = require('mongoose');
const config = require('config');
const dbgr = require('debug')("development:mongoose");

mongoose.connect(config.get("MONGODB_URI"), {
      dbName: 'Scratch'
})
      .then(() => {
            dbgr("Connected to MongoDB");
      })
      .catch((err) => {
            dbgr("Connection error:", err);
      });

module.exports = mongoose.connection;
