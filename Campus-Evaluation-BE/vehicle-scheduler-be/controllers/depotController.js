const Log = require("../../logging-middleware/logging");
const depotService = require("../services/depotService");

async function getDepots(req, res) {
    try {
        await Log(
            "backend",
            "info",
            "controller",
            "getDepots controller started"
        );
        const depots = await depotService.getDepots();
        await Log(
            "backend",
            "info",
            "controller",
            "getDepots controller completed successfully"
        );

        res.status(200).json(depots);
    } catch (error) {
        await Log(
            "backend",
            "error",
            "controller",
            `getDepots controller failed: ${error.message}`
        );

        res.status(500).json({
            message: "Failed to get depots",
        });
    }
}

module.exports = {
    getDepots,
};
