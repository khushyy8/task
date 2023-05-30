const express = require("express")
const router = express.Router();
const productdata = require("./product")

router.use("/productdata" ,productdata )


module.exports = router;