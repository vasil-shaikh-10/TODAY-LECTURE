const mongoose = require("mongoose");
const dbconnect =async()=>{
    await mongoose.connect("mongodb://localhost:27017")
    console.log("CONNECT TO THE DATABASE");
    
}
module.exports =dbconnect;