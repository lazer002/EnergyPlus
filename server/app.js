const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors({origin: 'http://localhost:5173',
credentials:true}))
const dotenv = require('dotenv')

const bodyparser = require('body-parser')
dotenv.config({path:'./config.env'})
const router = require('./routes/auth.js')
require('./db/config.js')
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}))

















app.use('/',router)
app.listen(process.env.PORT,()=>{
    console.log('backend running on 9999');
})