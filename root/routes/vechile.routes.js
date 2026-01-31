const router = require("express").Router();
const role = require("../middleware/role.middleware");
const rateLimiter= require("../middleware/rateLimiter.middleware");
const controller=require("../controllers/vechile.controller");
router.post("/add",role(["owner"]),
rateLimiter,controller.createVehicle);
router.patch("/assign-driver/:vechileId",
role(["owner"]),controller.assignDriver);
router.get("/:vechileId",controller.getVehicle);
module.exports=router;