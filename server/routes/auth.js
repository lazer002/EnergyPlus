const express = require('express');
const router = express.Router();
const User = require('../schema/user');

router.post('/signup', async (req, res) => {
  const {email,password,role,token}=req.body.user
let existuser = await User.findOne({email:email})
if(existuser){
    return res.status(422).json({Error:'already user'})
} 
try{
    var data = new User({
        email,password,role,token
    })
  let saveuser=  await data.save()
if(saveuser){
    return res.status(201).json({Error:'created'})
}
}catch(err){
    console.log(err);
} })



router.post('/login',async(req,res)=>{
    const {email,password}=req.body.user
    
})














module.exports = router;
