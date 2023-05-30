const validators = require("./index")

module.exports = (function validator(validate){
    if(!validators.hasOwnProperty(validate)){
        throw new Error(`${validate} validate not found`)
    }
    return async function(req,res,next){
        try {
            const valid = await validators[validate].validateAsync(req.body)
            req.body = valid;
            next()
        } catch (error) {
            next(error)
        }
    }
})