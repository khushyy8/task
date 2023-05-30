const express = require("express")
const router = express.Router();
const cart = require("../../controller/cartcontroller")


router.get("/getdata" , cart.getdata)
router.post("/adddata" , cart.adddata)
router.post("/deletedata" , cart.deletedata)
router.get("/getdatabyuser" , cart.getdatabyuser)




module.exports = router;