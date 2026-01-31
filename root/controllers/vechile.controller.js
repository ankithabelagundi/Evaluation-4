const supabase= require("../config/supabase");
exports.createVehicle = async(req,res)=>{
    const{name,registration_number,allowed_passenger,rate_per_km, owner_id}=req.body;
    const{error}=await supabase.from("vehicles").insert([{
        name,
        registration_number,
        allowed_passenger,
        rate_per_km, 
        owner_id  
    }]);
    if(error)
        return res.status(400).json({message:error.message});
    res.status(201).json({message:"vehicle created"});
}
exports.getVehicle=async(req,res)=>{
    const{data}=await supabase
    .from("vehicles")
    .select("*")
    .eq("id",req.params.vehicleId)
    .single();
    res.json(data);
}