const express = require("express")
const router = express.Router();
const product = require("../../controller/productcontroller")
const validate = require("../../validation/validationrequest");
const jwtvalidate = require('../../middleware/jwtauth')

router.get("/getdata" , product.getdata)
router.post("/adddata" ,validate("product"), product.adddata)
router.delete("/deletedata" , product.deletedata)
router.patch("/editdata" , product.editdata)
router.get("/getbyid" ,product.getbyid)




module.exports = router;