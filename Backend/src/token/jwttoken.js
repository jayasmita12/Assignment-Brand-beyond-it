const jwt = require("jsonwebtoken")

const generatetoken = (id)=>{
    return jwt.sign({id},process.env.JWTPRIVATEKEY,{
        expiresIn:"14d",
    })
};

module.exports=generatetoken