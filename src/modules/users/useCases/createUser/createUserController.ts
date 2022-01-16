import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserService } from './createUserService';

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name, email, password, isAdmin,
    } = req.body;

    const createUserService = container.resolve(CreateUserService);

    await createUserService.execute({
      name, email, password, isAdmin,
    });

    return res.status(201).json();
  }
}

export { CreateUserController };
