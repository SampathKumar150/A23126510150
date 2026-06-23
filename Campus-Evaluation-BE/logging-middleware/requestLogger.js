const Log = require("../logging-middleware/logging");

function requestLogger(req, res, next) {
    const startTime = Date.now();

    Log(
        "backend",
        "info",
        "handler",
        `${req.method} ${req.originalUrl} request received`
    );

    res.on("finish", () => {
        const duration = Date.now() - startTime;

        Log(
            "backend",
            "info",
            "handler",
            `${req.method} ${req.originalUrl} completed with status ${res.statusCode} in ${duration}ms`
        );
    });

    next();
}

module.exports = requestLogger;