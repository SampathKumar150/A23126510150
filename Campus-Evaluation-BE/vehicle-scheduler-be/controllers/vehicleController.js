const Log = require("../../logging-middleware/logging");
const vehicleService = require("../services/vehicleService");
async function getVehicles(req, res) {
    try {
        await Log(
            "backend",
            "info",
            "controller",
            "getVehicles controller started"
        );
        const vehicles = await vehicleService.getVehicles();
        await Log(
            "backend",
            "info",
            "controller",
            "getVehicles controller completed successfully"
        );

        res.status(200).json(vehicles);
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