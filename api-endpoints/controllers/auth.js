const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js")

router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS
    })
})