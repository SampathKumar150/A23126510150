const express = require('express');
const Log = require("../../logging-middleware/logging"); 
const vechileController = require("../controllers/vehicleController");
const router = express.Router();
require('dotenv').config();

router.get("/", async (req, res) => {
    await Log(
        "backend",
        "info",
        "route",
        `${req.method} ${req.originalUrl} request received`
    );
    await vechileController.getVehicles(req, res);
});

module.exports = router;
