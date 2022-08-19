const mongoose = require("mongoose")

const connect =()=>{
    const connectdb = {
        useNewurlParser:true
    }
    mongoose.connect(process.env.MONGOURI,connectdb)
    console.log("Connect to database Successfully")
}
module.exports = connect