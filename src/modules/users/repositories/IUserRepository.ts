import { User } from '../entities/User';

interface IUserRepository {
  create({
    name, email, password, isAdmin,
  }: User): Promise<void>;

  findByEmail(email: string): Promise<User | undefined>;

  findById(id: string): Promise<User | undefined>;

  findAll(): Promise<User[]>

  delete(id: string): Promise<void>;

  update(id: string, { name, email }: User): Promise<void>;

}

export { IUserRepository };
