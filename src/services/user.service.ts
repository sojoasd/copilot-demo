import { injectable } from "tsyringe";

type User = {
  id: number;
  name: string;
  createdAt: string;
};

@injectable()
export class UserService {
  private users: User[] = [];
  private nextId: number = 1;

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }

  async getUserById(id: number): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async createUser(name: string): Promise<User> {
    const newUser: User = {
      id: this.nextId++,
      name,
      createdAt: new Date().toISOString().split('T')[0],
    };
    this.users.push(newUser);
    return newUser;
  }

  async updateUser(id: number, name: string): Promise<User | null> {
    const user = this.users.find(user => user.id === id);
    if (!user) return null;
    user.name = name;
    return user;
  }

  async deleteUser(id: number): Promise<boolean> {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return false;
    this.users.splice(index, 1);
    return true;
  }
}
