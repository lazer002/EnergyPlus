const express = require('express')
const router =express.Router()


router.post('/a', async(req,res)=>{
    console.log(req.body);
})









module.exports = router;
