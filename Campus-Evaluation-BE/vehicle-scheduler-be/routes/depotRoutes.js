const express = require('express');
const Log = require("../../logging-middleware/logging");
const depotController = require("../controllers/depotController");
const router = express.Router();

router.get("/", async (req, res) => {
    await Log(
        "backend",
        "info",
        "route",
        `${req.method} ${req.originalUrl} request received`
    );
    await depotController.getDepots(req, res);
});

module.exports = router;
