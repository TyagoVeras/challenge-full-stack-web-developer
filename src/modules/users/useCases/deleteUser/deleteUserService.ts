import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class DeleteUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}

  execute(id: string): Promise<void> {
    return this.usersRepository.delete(id);
  }
}

export { DeleteUserService };
