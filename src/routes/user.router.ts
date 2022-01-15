import { Router } from 'express';
import { CreateUserController } from '../modules/users/useCases/createUser/createUserController';
import { ListAllUsersController } from '../modules/users/useCases/listAllUsers/listAllUsersController';
import { UpdateUserController } from '../modules/users/useCases/updateUser/updateUserController';

const userRouter = Router();

const listAllUsersController = new ListAllUsersController();
const createUserController = new CreateUserController();
// const getUserController = new GetUserController();
const updateUserController = new UpdateUserController();

userRouter.get('/', listAllUsersController.handle);
userRouter.post('/', createUserController.handle);
// userRouter.get('/:id', getUserController.handle);
userRouter.put('/:id', updateUserController.handle);

export { userRouter };
