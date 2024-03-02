const mongo = require('mongoose')
const Uss = new mongo.Schema({
    email:{
        type:String
      
    },
    password:{
        type:String
       
    }
})

const  User = mongo.model('User',Uss)
module.exports = User