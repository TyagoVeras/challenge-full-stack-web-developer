import { container } from 'tsyringe';
import { UserRepositoryPrisma } from '../../modules/accounts/repositories/implementations/UserRepositoryPrisma';
import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository';

container.register<IUserRepository>(
  'UserRepository',
  UserRepositoryPrisma,
);
