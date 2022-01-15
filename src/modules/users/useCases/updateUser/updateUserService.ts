import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({
    id, name, email, password,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists && userAlreadyExists.id !== id) {
      throw new Error('User already exists with this email.');
    }

    const hashedPassword = await hash(password, 8);

    await this.userRepository.update(id, { name, email, password: hashedPassword });
  }
}

export { UpdateUserService };
