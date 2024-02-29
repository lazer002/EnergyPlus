const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const router = require('./routes/auth.js')
require('./db/config.js')


app.use(cors({ origin: 'http://localhost:9999' }))
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json());















app.use('/',router)
app.listen(process.env.PORT,()=>{
    console.log('running backend on 9999');
})