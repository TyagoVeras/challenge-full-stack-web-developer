import { Router } from 'express';
import { authenticateRouter } from './authenticate.router';
import { userRouter } from './user.router';

const router = Router();

router.use('/users', userRouter);
router.use(authenticateRouter);

export { router };
