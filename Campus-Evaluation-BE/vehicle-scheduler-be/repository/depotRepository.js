const axios = require('axios');
const Log = require("../../logging-middleware/logging");

async function getDepots() {
    try {
        await Log(
            "backend",
            "info",
            "repository",
            "getDepots repository started"
        );

        const response = await axios.get(process.env.DEPOTS_API_URL, {
            headers: {
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
            },
        });
        const depots = response.data;

        await Log(
            "backend",
            "info",
            "repository",
            "getDepots repository completed successfully"
        );

        return depots;
    } catch (error) {
        await Log(
            "backend",
            "error",
            "repository",
            `getDepots repository failed: ${error.message}`
        );
        throw error;
    }
}

module.exports = {
    getDepots,
};
