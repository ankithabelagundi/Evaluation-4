const express = require ("express");
const logger =require("./middleware/logger.middleware");
const notFound = require("./middleware/notFound.middleware");
const peopleRoutes= require("./routes/peoplee.routes");
const vehicleRoutes = require("./routes/vechile.routes");
const tripRoutes = require("./routes/trip.routes");
const analyticsRoutes=require("./routes/analytics.routes");
const app = express();
app.use(express.jspn())
app.use(logger);
app.use("/people",peopleRoutes);
app.use("vehicles",vehicleRoutes);
app.use("/trips",tripRoutes);
app.use("/analytics",analyticsRoutes);
app.use(not found);
module.exports =app;