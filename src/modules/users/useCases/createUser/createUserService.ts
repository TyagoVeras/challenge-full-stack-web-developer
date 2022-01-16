import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../../dtos/IUserDTO';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({
    name,
    email,
    password,
    isAdmin,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }
    const hashedPassword = await hash(password, 8);

    // check if user is admin
    let isAdminBoolean = false;
    if (isAdmin === 'true') { isAdminBoolean = true; }

    await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      isAdmin: isAdminBoolean,
    });
  }
}

export { CreateUserService };
