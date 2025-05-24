
const mongoose =require("mongoose");

module.exports=()=>{
    try {
        mongoose.connect(process.env.DATABASE);
        console.log("Your DataBase Connect");
    } catch (error) {
        console.log(error);
        console.log("Your DataBase Couldn't Connect");
    }
}