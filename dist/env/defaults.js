"use strict";
// default config
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    port: process.env.PORT || 3003,
    env: 'development',
    database: {
        client: 'mongodb'
    },
    pino_log_level: 'info'
};
// Set the current environment or default to 'development'
config.env = process.env.NODE_ENV || 'development';
exports.default = config;
//# sourceMappingURL=defaults.js.map