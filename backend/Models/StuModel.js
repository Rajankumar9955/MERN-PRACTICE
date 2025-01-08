



const mongoose=require("mongoose");
const StuScema=new mongoose.Schema({
    rollno:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    fees:{
        type:Number,
        require:true
    }
})
module.exports=mongoose.model("student",StuScema);