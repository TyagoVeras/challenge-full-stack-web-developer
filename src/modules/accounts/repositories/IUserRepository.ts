import { User } from '../entities/User';

interface IUserRepository {
  create({ name, email, password }: User): Promise<void>;

  findByEmail(email: string): Promise<User | undefined>;

  findById(id: string): Promise<User | undefined>;

  delete(id: string): Promise<void>;

  update(id: string, { name, email }: User): Promise<void>;

}

export { IUserRepository };
