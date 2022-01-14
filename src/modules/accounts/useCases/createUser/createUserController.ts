import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserService } from './createUserService';

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUser = container.resolve(CreateUserService);

    await createUser.execute({ name, email, password });

    return res.status(201).json();
  }
}

export { CreateUserController };
