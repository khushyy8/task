var jwt = require('jsonwebtoken');

module.exports =(requirevalide) => (req,res,next)=>{
    let authtoken = req.get("Authorization")
    if (!authtoken) {
        return res.status(401).json({message:"Authentication Failed"})
    }
    let token = authtoken.split(" ")[1]
    let decoded
    try {
        decoded = jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        console.log("invalid token",error)
    }
    let uservalid = requirevalide.includes(decoded.role)
    console.log("uservalid" , decoded.role)
    if (!uservalid) {
        return res.status(401).json({message:"User not valid"})
        
    }
    next()
    // console.log("requirevalide",requirevalide)
    // console.log("decoded",decoded)
    // console.log("uservalid",uservalid)
}