const express = require("express");
const User = require("../models/user.models");

const router = express.Router();
router.route("/register").post((req, res) => {
    console.log("Inside the register");
    const user = new User({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
    });
    user
        .save()
        .then(() => {
            console.log("user registered");
            res.status(200).json("ok");
        })
        .catch((err) => {
            res.status(403).json({ msg : err });
        });
});

module.exports = router;