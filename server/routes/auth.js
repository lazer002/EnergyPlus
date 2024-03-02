const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../schema/user');

router.post('/login', async (req, res) => {
    console.log(req.body);
    var data = new User({
        email:req.body.user.email,
        password:req.body.user.password
    })
    await data.save().then((result)=>{
        console.log(result)})
        .catch ((err) =>{
            console.log(err)})
        })


module.exports = router;
