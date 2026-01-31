module.exports=(roles)=>{
    return(req,res,next)=>{
        const role = req.headers.role;
        if(!role.includes(role)){
            return
            res.status(403).json({message:"Access denied"});
            next();
        };
    };
}