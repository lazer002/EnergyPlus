const express = require('express')
const app = express()
const router = express.Router()
const dotenv = require('dotenv')
dotenv.config('./config.env')
const bodyparser = require('body-parser')
require('./connention/connection')
app.use(bodyparser.urlencoded({extended:true}))






app.use('/',router)
app.listen(process.env.PORT,()=>{
    console.log('running backend on 9999');
})