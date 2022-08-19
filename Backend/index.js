const express = require("express")
const cors = require("cors")
require("dotenv").config()
const connect= require("./src/config/db")
const userRoute = require("./src/route/userRoute")

const app = express()
connect()
app.use(express.json())
app.use(cors())

app.use("/api/users",userRoute)
const port = process.env.PORT || 8080
app.listen(port , ()=>{
    console.log(`Listening to PORT ${port}`)
})