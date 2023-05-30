const mongoose = require("mongoose")
const cart = require("../schema/addtocart")

const response = require("../utils/responcevalidate")
exports.getdata = (async(req,res) => {
    try {
        const data = await cart.find()
        
        let a = await cart.find();
         let count = 0
        let total = 0;
        for(let i=0; i<a.length; i++){
         for(let j =0; j<a.length; j++){
            if(a[i].userName == a[j].userName){
                count++
                if(count>1){
                    a.splice(i,1)
                }
                
            }
         }
        }
        console.log("a",a)


        let productarray = [];
        let newarray = []
        for(let i=0; i<a.length; i++){
            for(let j =0; j<data.length; j++){
                if(a[i].userName==data[j].userName){
                    productarray.push({
                        product : data[j].pname,
                        price : data[j].price 

                    })
                    total = total + data[j].price

                }
              
            }
            newarray.push({
                userName : a[i].userName,
                product : productarray,
                price: total 
            })
           
            productarray = [];
            total = 0

        }
        console.log(newarray)
        const sum =  data.reduce((accumulator,object)=>{
            return accumulator+object.price;
        },0)
        
        return res.status(200).json({
            status:true,
            data:newarray,
            sum:sum,
            message:"data get successfully"
        })
    }
     catch (error) {
        return res.status(500).json(response.errorResponse("server error")) 
    }
})
exports.adddata = (async(req,res) => {
    console.log("req.body", req.body)
    try {
        const data = await cart.create(req.body)
        return res.status(200).json(response.successResponse(data, "data add sucessfully"))
    }
     catch (error) {
        return res.status(500).json(response.errorResponse("server error")) 
    }
})
exports.deletedata = (async(req,res) => {
    try {
        const data = await cart.findByIdAndDelete(req.query._id)
        return res.status(200).json(response.successResponse(data, "data delete sucessfully"))
    }
     catch (error) {
        return res.status(500).json(response.errorResponse("server error"))
        
    }
})
exports.getdatabyuser = (async(req,res) => {
    try {
        const data = await cart.find({"userName" :req.query.userName})
        const sum =  data.reduce((accumulator,object)=>{
            return accumulator+object.price;
        },0)
        return res.status(200).json({
            status : true,
            sum : sum,
            data: data,
            message : "data get successfully"
        })
    }
     catch (error) {
        return res.status(500).json(response.errorResponse("server error"))
        
    }
})