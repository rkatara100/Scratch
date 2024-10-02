const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const ownerModel = require('../models/owners'); // Ensure the path is correct
const router = express.Router();


const vari = process.env.NODE_ENV;
console.log(vari);

if (vari) {
      router.post('/create', async (req, res) => {
            try {
                  console.log("Received request to create owner");
                  const owners = await ownerModel.find({});
                  console.log("Owners found:", owners);

                  if (owners.length > 0) {
                        return res.status(403).send("You are not allowed to proceed further");
                  }

                  const { fullname, email, password } = req.body;

                  // Validate request body
                  if (!fullname || !email || !password) {
                        return res.status(400).send("All fields are required");
                  }

                  console.log("Creating new owner with data:", { fullname, email, password });
                  const newOwner = await ownerModel.create({ fullname, email, password });
                  console.log("New owner created:", newOwner);
                  return res.status(201).send(newOwner);
            } catch (error) {
                  console.error("Error creating owner:", error);
                  return res.status(500).send("Internal Server Error");
            }
      });
}

router.get('/admin', (req, res) => {
      let success = req.flash("success");
      res.render("createproducts", { success });
});

module.exports = router;
