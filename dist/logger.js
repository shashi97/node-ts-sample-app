"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pino = require("pino");
const config = require("./env");
const l = pino({
    prettyPrint: {
        levelFirst: true,
        translateTime: true
    },
    level: config.default.pino_log_level
});
exports.default = l;
//# sourceMappingURL=logger.js.map