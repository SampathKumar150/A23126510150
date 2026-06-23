const express = require("express");
const requestLogger = require("../logging-middleware/requestLogger");
const vehicleRoutes = require("./routes/vehicleRoutes");
require('dotenv').config({ path: './.env' });
const Log = require("../logging-middleware/logging");

const app = express();

app.use(express.json());
app.use(requestLogger);

app.get("/", async (req, res) => {
    await Log(
        "backend",
        "info",
        "route",
        `${req.method} ${req.originalUrl} request received`
    );
    res.json({ message: "Vehicle Scheduler Backend is running" });

});

app.use("/api/vehicles", vehicleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    await Log(
        "backend",
        "info",
        "config",
        `Vehicle Scheduler Backend started on port ${PORT}`
    );
});