const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const  userSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,required:true
    }

},{
   timestamps:true 
})
userSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password =await bcrypt.hash(this.password,salt)
})

userSchema.methods.matchPassword = async function(enterpassword){
    return await bcrypt.compare(enterpassword, this.password)
}

const User = mongoose.model("User",userSchema)
module.exports=User


c