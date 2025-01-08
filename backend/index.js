

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cors=require("cors");
const bodyparser=require("body-parser")
const StuRoute=require("./Routes/StuRoutes")

mongoose.connect("mongodb://localhost:27017/studentdatabase").then((res)=>{
    console.log("Data Conneted!!")
})

app.use(cors())
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/students",StuRoute)

app.listen(8000,()=>{
    console.log("server run on 8000 port");
})