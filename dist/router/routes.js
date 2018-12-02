"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// import Auth from '../config/AuthMiddleware';
// import passport from '../config/PassportStrategy';
const _1 = require("./");
class Routes {
    /**
     * @param  {IServer} server
     * @returns void
     */
    static init(server) {
        const router = express.Router();
        server.app.use('/', router);
        // restrcited routes
        server.app.use('/api/v1/users', new _1.UserRouter().router);
    }
}
exports.default = Routes;
//# sourceMappingURL=routes.js.map