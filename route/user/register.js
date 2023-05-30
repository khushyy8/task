const express = require("express")
const router = express.Router();
const register = require("../../controller/registercontroller")
const validate = require("../../validation/validationrequest")

router.get("/getdata", register.getdata)
router.post("/adddata" ,validate("register"), register.adddata)
router.delete("/deletedata" , register.deletedata)
router.patch("/editdata" , register.editdata)
router.get("/getbyid" , register.getbyid)
router.get("/getdatabyrole", register.getdatabyrole)



module.exports = router;