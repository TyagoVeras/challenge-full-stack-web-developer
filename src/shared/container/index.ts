import { container } from 'tsyringe';
import { UserRepositoryPrisma } from '../../modules/users/repositories/implementations/UserRepositoryPrisma';
import { IUserRepository } from '../../modules/users/repositories/IUserRepository';

container.register<IUserRepository>(
  'UserRepository',
  UserRepositoryPrisma,
);
