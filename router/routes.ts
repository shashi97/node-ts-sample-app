import * as express from 'express';
import * as path from 'path';

// import Auth from '../config/AuthMiddleware';
// import passport from '../config/PassportStrategy';

import { UserRouter } from './';
import { IServer } from '../interfaces/ServerInterface';
import L from '../logger';

export default class Routes {
    /**
     * @param  {IServer} server
     * @returns void
     */
    static init(server: IServer): void {
        const router: express.Router = express.Router();
        server.app.use('/', router);
        // restrcited routes
        server.app.use('/api/v1/users', new UserRouter().router);            
    }
}
