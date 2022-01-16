import { inject, injectable } from 'tsyringe';
import { IResponseUserDTO } from '../../dtos/IUserDTO';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class ListAllUsersService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(): Promise<IResponseUserDTO[]> {
    const users = await this.userRepository.findAll();

    const listUsers = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    }));

    return listUsers;
  }
}
export { ListAllUsersService };
