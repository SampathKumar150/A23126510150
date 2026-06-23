const Log = require("../../logging-middleware/logging");
const depotRepository = require("../repository/depotRepository");

async function getDepots() {
    try {
        await Log(
            "backend",
            "info",
            "service",
            "getDepots service started"
        );
        const depots = await depotRepository.getDepots();
        await Log(
            "backend",
            "info",
            "service",
            "getDepots service completed successfully"
        );

        return depots;
    } catch (error) {
        await Log(
            "backend",
            "error",
            "service",
            `getDepots service failed: ${error.message}`
        );
        throw error;
    }
}

module.exports = {
    getDepots,
};
