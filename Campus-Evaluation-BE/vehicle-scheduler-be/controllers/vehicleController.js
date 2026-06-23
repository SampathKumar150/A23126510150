const Log = require("../../logging-middleware/logging");

async function getVehicles(req, res) {
    try {
        await Log(
            "backend",
            "info",
            "controller",
            "getVehicles controller started"
        );

        res.status(200).json({
            message: "Vehicle controller working",
        });
    } catch (error) {
        await Log(
            "backend",
            "error",
            "controller",
            `getVehicles controller failed: ${error.message}`
        );

        res.status(500).json({
            message: "Failed to get vehicles",
        });
    }
}

module.exports = {
    getVehicles,
};