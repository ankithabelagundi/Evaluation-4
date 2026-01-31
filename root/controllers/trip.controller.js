const supabase = require("../config/supabase");
exports.createTrip=async(req,res)=>{
    const{customer_id,vehicle_id,passengers,...rest}=req.body;
    const{data:vehicle}=await supabase
    .from("vehicles")
    .select("*")
    .eq("id",vehicle_id)
    .single();
    if(!vehicle.isAvailable)
        return res.status(400).json({message:"vehicle not available"});
    if(passengers>vehicle.allowed_passengers)
        return res.status(400).json({message:"Passenger limit exceeded"});
    await supabase.from("vehicles")
.update({isAvailable:false})
.eq("id",vehicle_id);
 await 
 supabase.from("trips").insert([{customer_id,vehicle_id,passengers,...rest}]);
 res.status(201).json({mesage:"trip created"});
}
 exports.endTrip=async(req,res)=>{
    const{data:trip}=await supabase 
    .from("trips")
    .select("distance_km,vehicle_id")
    .eq("id",trip.vehicle_id)
    .single();
    const cost = trip.distance_km*vehicle.rate_per_km;
    await supabase.from("trips")
    .update({isCompleted:true,tripCost:cost})
    .eq("id",req.params.tripId);
    await supabase.from("vehicles")
    .update({isAvailable:true})
    .eq("id",trip.vehicle_id);
    res.json({message:"trip ended",tripCost:cost});
 }
