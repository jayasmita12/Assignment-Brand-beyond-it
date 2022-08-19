const mongoose = require("mongoose")

const connect =()=>{
    const connectdb = {
        useNewurlParser:true
    }
    try {
        
        mongoose.connect("mongodb+srv://jaya-test:sahu1234@cluster0.i7ryplj.mongodb.net/?retryWrites=true&w=majority",connectdb)
        console.log("Connect to database Successfully")
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = connect