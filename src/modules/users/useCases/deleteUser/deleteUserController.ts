import { container } from 'tsyringe';
import { Response, Request } from 'express';
import { DeleteUserService } from './deleteUserService';

class DeleteUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteUser = container.resolve(DeleteUserService);

    await deleteUser.execute(id);

    return res.status(204).json();
  }
}

export { DeleteUserController };
