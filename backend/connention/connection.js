const mongo = require("mongoose")
const mon = process.env.DATABASE
mongo.connect(mon,{
}).then(()=>{
    console.log('db connected');
}).catch((err)=>{
    console.log(err);
})

module.exports = mongo;