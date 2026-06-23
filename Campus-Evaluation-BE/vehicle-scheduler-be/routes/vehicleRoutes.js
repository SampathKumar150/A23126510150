const express = require('express');
const Log = require("../../logging-middleware/logging"); 
const vehicleController = require("../controllers/vehicleController");
const router = express.Router();

router.get("/", async (req, res) => {
    await Log(
        "backend",
        "info",
        "route",
        `${req.method} ${req.originalUrl} request received`
    );
    await vehicleController.getVehicles(req, res);
});

module.exports = router;
