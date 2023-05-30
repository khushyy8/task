const mongoose = require("mongoose")

require("../schema/registershema");
// require("../schema/productschema")

mongoose.connect('mongodb://127.0.0.1:27017/task').then(() => console.log('Connected!')).catch((error)=> console.log("error",error));