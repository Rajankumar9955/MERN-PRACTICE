


const express=require("express");
const route=express.Router();
const StuController=require("../Controller/StuController")
route.post("/datasave",StuController.DataSave)
route.get("/datadisplay",StuController.DataDisplay)
route.post("/datadelete",StuController.DataDelete)
route.post("/editdatadisplay",StuController.EditDataDisplay)
route.post("/editdatasave",StuController.EditDataSave)
route.post("/datasearch",StuController.DataSearch)

module.exports=route;