const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express()
const connect= require("./src/config/db")
const userRoute = require("./src/route/userRoute")


connect()
app.use(express.json())
app.use(cors())

app.use("/api/user",userRoute)

const port = process.env.PORT || 5050
app.listen(port , ()=>{
    console.log(`Listening to PORT ${port}`)
})