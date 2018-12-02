import * as express from 'express';
import Routes from './router/routes';

/**
 * @class Server
 */
export class Server {
    // set app to be of type express.Application
    public app: express.Application;

    constructor() {
        this.app = express();       
        Routes.init(this);
    }
}

// export
export default new Server().app;
