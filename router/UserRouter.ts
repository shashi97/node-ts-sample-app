import UserController from '../controllers/UserController';
import { Router } from 'express';
/**
 * @class UserRouter
 */
export  class UserRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        this.router.get('/', UserController.getUser);       
    }
}
