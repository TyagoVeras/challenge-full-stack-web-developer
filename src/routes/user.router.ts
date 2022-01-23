import { Router } from 'express';
import { CreateUserController } from '../modules/users/useCases/createUser/createUserController';
import { ListAllUsersController } from '../modules/users/useCases/listAllUsers/listAllUsersController';
import { UpdateUserController } from '../modules/users/useCases/updateUser/updateUserController';
import { DeleteUserController } from '../modules/users/useCases/deleteUser/deleteUserController';
import { GetUserController } from '../modules/users/useCases/getUser/getUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const userRouter = Router();

const listAllUsersController = new ListAllUsersController();
const createUserController = new CreateUserController();
const getUserController = new GetUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

userRouter.post('/', createUserController.handle);

// userRouter.use(ensureAuthenticated);
userRouter.get('/', listAllUsersController.handle);
userRouter.get('/:id', getUserController.handle);
userRouter.put('/:id', updateUserController.handle);
userRouter.delete('/:id', deleteUserController.handle);

export { userRouter };
