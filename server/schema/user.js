const mongo = require('mongoose')
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')
const Uss = new mongo.Schema({
    email:{
        type:String
      
    },
    password:{
        type:String
       
    },
    role:{
        type:String,
        default:'user'
    },
    tokens: [{
        token: {
          type: String,
          required: true,
        },
      }]
})

Uss.pre('save',async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12)
    }
    next()
})


Uss.methods.generateAuthtoken = async function(){
    try{
        token = jwt.sign({_id:this._id},process.env.Secret_key)
        this.tokens.push({token})
        await this.save()
        return token
    }catch(err){
console.log(err);
    }
}


const  User = mongo.model('User',Uss)
module.exports = User