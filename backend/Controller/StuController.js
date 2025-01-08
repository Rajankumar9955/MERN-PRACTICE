
const StuModel=require("../Models/StuModel")


const DataSave=async(req,res)=>{
   const {rollno,name,city,fees}=req.body;
   const data=await StuModel.create({
         rollno:rollno,
         name:name,
         city:city,
         fees:fees
   })
   res.send(data);
}
const DataDisplay=async(req,res)=>{
      const mydata =await StuModel.find();
      res.send(mydata);
}
const DataDelete=async(req,res)=>{
    const {id}=req.body;
   const del=await StuModel.findOneAndDelete(id);
   res.send(del);

}
const EditDataDisplay=async(req,res)=>{
    const {id}=req.body;
    const show=await StuModel.findById(id);
    res.send(show)
}
const EditDataSave=async(req,res)=>{
    const{_id,rollno,name,city,fees}=req.body;
    const update=await StuModel.findByIdAndUpdate(_id,{
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.send(update);
}
const DataSearch=async(req,res)=>{
    const {name}=req.body;
    const srch=await StuModel.find({"name":{$regex:name,$options:'i'}})
    console.log(srch);
    res.send(srch);
}
module.exports={
    DataSave,
    DataDisplay,
    DataDelete,
    EditDataDisplay,
    EditDataSave,
    DataSearch
}