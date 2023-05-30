require("./config/dbconnect")
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const router = require("./route")
var cors = require('cors')
dotenv.config()

app.use(express.json())
app.use(cors())
app.use("/hey" , router)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("port is"  + PORT)
})
