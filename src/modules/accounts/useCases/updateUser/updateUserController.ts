import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateUserService } from './updateUserService';

class UpdateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const updateUser = container.resolve(UpdateUserService);

    await updateUser.execute({
      id, name, email, password,
    });

    return res.status(201).json();
  }
}

export { UpdateUserController };
