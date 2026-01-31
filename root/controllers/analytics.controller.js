const supabase = require("../config/supabase");
const supabse =require("../config/supabase");
exports.getAnalytics =async(req,res)=>{
const customers= await supabase
.from("people")
.select("*",{count:"exact"})
.eq("role","customer");
const owners=await
supabase.from("people")
.select("*",{count:"exact"})
.eq("role,owner");
const derivers =await
supabase.from("people")
.select("*",{count:"exact"})
.eq("role,driver");
const vehicle=await
supabase.from("vehicles")
.select("*",{count:"exact"});
const trips=await
supabase.from("trips")
.select("*",{count:"exact"});
res.json({
    total_customers:customers.count,
    total_owners:owners.count,
    total_drivers:derivers.count,
     total_vehicles:vehicles.count,
      total_trips:trips.count
})
}
