const axios = require('axios');
const Log = require("../../logging-middleware/logging");

async function getVehicles() {
    try {
        await Log(
            "backend",
            "info",
            "repository",
            "getVehicles repository started"
        );

        const response = await axios.get(process.env.VEHICLES_API_URL, {
            headers: {
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
            },
        });
        const vehicles = response.data;

        await Log(
            "backend",
            "info",
            "repository",
            "getVehicles repository completed successfully"
        );

        return vehicles;
    } catch (error) {
        await Log(
            "backend",
            "error",
            "repository",
            `getVehicles repository failed: ${error.message}`
        );
        throw error;
    }
}

module.exports = {
    getVehicles,
};
