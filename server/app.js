const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors({origin: 'http://localhost:5173'}))
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const router = require('./routes/auth.js')
require('./db/config.js')
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))


app.use(express.json());
















app.use('/',router)
app.listen(process.env.PORT,()=>{
    console.log('backend running on 9999');
})