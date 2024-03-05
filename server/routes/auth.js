const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../schema/user');
const jwt =require('jsonwebtoken')
const cookie = require('cookie-parser')

// router.post('/signup', async (req, res) => {
//   const {email,password,role,token}=req.body.user
// let existuser = await User.findOne({email:email})
// if(existuser){
//     return res.status(422).json({Error:'already user'})
// } 
// try{
//     var data = new User({
//         email,password,role,token
//     })
//   let saveuser=  await data.save()
// if(saveuser){
//     return res.status(201).json({Error:'created'})
// }
// }catch(err){
//     console.log(err);
// } })



router.post('/login',async(req,res)=>{
    const {email,password}=req.body.user
if(!email||!password){

    return res.status(422).json({Error:'nnooooo'})
}else{

    const data =await User.findOne({email:email})
    if(data){
        console.log(data);
    const ismatch = await bcrypt.compare(password,data.password)
const token =await data.generateAuthtoken()
console.log(token)

    //     const toke= jwt.sign({userId:User._id}, process.env.Secret_key,{expiresIn:'1h'}    
    //   );




   
} 
if(!data)
{
    res.json({error:"invalid credentials"});
}
else{
res.json({message:"login successful"});
}}
   })
   















module.exports = router;
