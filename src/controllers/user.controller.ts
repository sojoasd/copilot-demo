import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { injectable } from "tsyringe";

@injectable()
export class UserController {
  constructor(private userService: UserService) {}

  async getAllUsers(req: Request, res: Response): Promise<void> {
    const users = await this.userService.getAllUsers();
    res.status(200).json(users);
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const user = await this.userService.getUserById(Number(id));
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.status(200).json(user);
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ error: "Invalid input data" });
      return;
    }
    const newUser = await this.userService.createUser(name);
    res.status(201).json(newUser);
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ error: "Invalid input data" });
      return;
    }
    const updatedUser = await this.userService.updateUser(Number(id), name);
    if (!updatedUser) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.status(200).json(updatedUser);
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const success = await this.userService.deleteUser(Number(id));
    if (!success) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.status(204).send();
  }
}
