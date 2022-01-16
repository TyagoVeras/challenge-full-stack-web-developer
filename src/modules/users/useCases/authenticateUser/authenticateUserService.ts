import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import 'dotenv/config';
import { IUserRepository } from '../../repositories/IUserRepository';
import { IResponseUserAuthenticateDTO, IRequestAuthenticateUserDTO } from '../../dtos/IUserDTO';

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({ email, password }: IRequestAuthenticateUserDTO): Promise<IResponseUserAuthenticateDTO> {
    // get user by email
    const user = await this.userRepository.findByEmail(email);

    // check if user exists
    if (!user) {
      throw new Error('User or password invalid');
    }

    // check if password is correct

    const passwordHash = compare(password, user.password);

    if (!passwordHash) {
      throw new Error('User or password invalid');
    }

    // check if user is not admin
    if (!user.isAdmin) {
      throw new Error('User is not admin');
    }

    // generate token
    const token = sign({}, process.env.JWT_SECRET_KEY, {
      subject: user.id,
      expiresIn: process.env.JWT_EXPIRESIN,
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      token,
    };
  }
}

export { AuthenticateUserService };
