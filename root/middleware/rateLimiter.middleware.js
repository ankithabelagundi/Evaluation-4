const rateMap=new Map();
module.exports=(req,res,next)=>{
    const ip=req.ip;
    const now =Date.now();
    if(!rateMap.has(ip)){
        rateMap.set(ip,[]);
    } 
    const timestamps= 
    rateMap.get(ip).filter(t=>now-t<60000);
    timestamps.push(now);
    rateMap.set(ip,timestamps);
    if(timestamps.length>3){
        return res.status(429).json({message:"Rate limit exceeded"});
    }
    next();
};