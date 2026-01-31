const supabase = require("../config/supabase");
exports.signup =async(req,res)=>{
    const{name,email,password,role}=req.body;
    if(!["customer","owner","driver"].includes(role)){
        return res.status(4000).json({message:"Invalid role"});
    }
    const {data,error}=await supabase
    .from("people")
    .insert([{name,emai,password,role}]);
    if(error){
        return res.status(4000).json({message:error.message});
    }
    if(error){
        return res.status(4000).json({message:error.message});
    }
    res.status(201).json({message:"Signup sucessful"});
};