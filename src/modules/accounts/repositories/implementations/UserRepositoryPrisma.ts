import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';
import prisma from '../../../../config/PrismaClient';

class UserRepositoryPrisma implements IUserRepository {
  async create({ name, email, password }: User): Promise<void> {
    await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  }

  async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    return user;
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async update(id: string, { name, email, password }: User): Promise<void> {
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        password,
      },
    });
  }
}

export { UserRepositoryPrisma };
