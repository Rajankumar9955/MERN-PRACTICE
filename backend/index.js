

const express=require("express");
const app=express();

const cors=require("cors");
const bodyparser=require("body-parser")
const serMid=require("./Middleware/serviceMin1")
app.use(cors())
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use((req,res,next)=>{
      console.log("This is app level middleware1")
      next();
})
app.get("/", (req,res,next)=>{
    console.log("This Home page")
    next()
})
app.get("/about", (req,res,next)=>{
    console.log("about Home page");
    next()
})
app.get("/service",serMid.serviceMid1,serMid.serviceMid2, (req,res,next)=>{
    console.log("This service page");
    next()
})
app.listen(8000,()=>{
    console.log("server run on 8000 port");
})
