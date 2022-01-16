import { container } from 'tsyringe';
import { Response, Request } from 'express';
import { GetUserService } from './getUserService';

class GetUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const getUser = container.resolve(GetUserService);

    const user = await getUser.execute(id);

    return res.status(200).json(user);
  }
}

export { GetUserController };
