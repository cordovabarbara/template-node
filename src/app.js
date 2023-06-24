const express = require("express")
const router = require("./routes")
require("dotenv").config()

const app = express() //esta es mi aplicacion
    app.get('/',(req, res)=>{
        return res.send("Welcome to express 👻👾🦄")
    })

app.use("/api/v1", router)

module.exports = app