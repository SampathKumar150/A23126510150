const Log = require("../../logging-middleware/logging");
const vehicleRepository = require("../repository/vehicleRepository");

async function getVehicles() {
    try {
        await Log(
            "backend",
            "info",
            "service",
            "getVehicles service started"
        );
        const vehicles = await vehicleRepository.getVehicles();
        await Log(
            "backend",
            "info",
            "service",
            "getVehicles service completed successfully"
        );

        return vehicles;
    } catch (error) {
        await Log(
            "backend",
            "error",
            "service",
            `getVehicles service failed: ${error.message}`
        );
        throw error;
    }
}
module.exports = {
    getVehicles,
};
    