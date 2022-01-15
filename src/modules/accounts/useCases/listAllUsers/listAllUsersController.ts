import { container } from 'tsyringe';
import { Response, Request } from 'express';
import { ListAllUsersService } from './listAllUsersService';

class ListAllUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listAllUsers = container.resolve(ListAllUsersService);
    const users = await listAllUsers.execute();

    return res.status(200).json(users);
  }
}

export { ListAllUsersController };
