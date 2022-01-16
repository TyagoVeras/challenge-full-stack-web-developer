import { Router } from 'express';
import { AuthenticateUserController } from '../modules/users/useCases/authenticateUser/authenticateUserController';

const authenticateRouter = Router();

const authenticateController = new AuthenticateUserController();

authenticateRouter.use('/session', authenticateController.handle);

export { authenticateRouter };
