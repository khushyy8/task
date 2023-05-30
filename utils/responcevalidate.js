function successResponse(data,message){
    return{
        status : true,
        data: data,
        message : message
    }
}

function errorResponse(message){
    return{
        status : false,
        data: [],
        message : message
    }
}
module.exports = {
    successResponse,
    errorResponse
}