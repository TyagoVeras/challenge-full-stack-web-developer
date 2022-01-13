import { v4 as uuid } from 'uuid';

class User {
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

  id?: string;

  name: string;

  email: string;

  password: string;

  createdAt?: Date;

  updatedAt?: Date;

  isAdmin?: boolean;
}

export { User };
