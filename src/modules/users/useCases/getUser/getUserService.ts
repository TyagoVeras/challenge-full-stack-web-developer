import { inject, injectable } from 'tsyringe';
import { IResponseUserDTO } from '../../dtos/IUserDTO';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class GetUserService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(id: string): Promise<IResponseUserDTO> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error('User not found.');
    }

    return user as IResponseUserDTO;
  }
}

export { GetUserService };
