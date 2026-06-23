const axios = require('axios');
require('dotenv').config();

const vaildStack = ['backend', 'frontend'];
const validLevels = ['debug', 'info', 'warn', 'error', 'fatal'];
const vaildPackages = [
    "cache",
    "controller",
    "cron_job",
    "db",
    "domain",
    "handler",
    "repository",
    "route",
    "service",
]
async function Log(stack, level, packageName, message) {
    if (!vaildStack.includes(stack)) {
        return false;
    }
    if (!validLevels.includes(level)) {
        return false;
    }
    if (!vaildPackages.includes(packageName)) {
        return false;
    }
    const LOG_API_URL = process.env.LOG_API_URL;
    try {
        const response = await axios.post(
            LOG_API_URL,
            {
                stack: stack,
                level: level,
                package: packageName,
                message: message,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.log("Logging failed:", error.response?.data || error.message);
        return false;
    }
}
module.exports = Log;