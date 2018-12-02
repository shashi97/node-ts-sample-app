"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./router/routes");
/**
 * @class Server
 */
class Server {
    constructor() {
        this.app = express();
        routes_1.default.init(this);
    }
}
exports.Server = Server;
// export
exports.default = new Server().app;
//# sourceMappingURL=server.js.map