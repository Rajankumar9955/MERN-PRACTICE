


const serviceMid1=(req,res,next)=>{
    console.log("Service MiddleWare-1")
    next();
}
const serviceMid2=(req,res,next)=>{
    console.log("Service MiddleWare-1")
    next();
}

module.exports={
    serviceMid1,
    serviceMid2
}
