import { Request, Response } from "express";
import { injectable } from "tsyringe";
import ChatService from "../services/chat.service";

@injectable()
export class ChatController {
  constructor(private chatService: ChatService) {}

  async getAllChats(req: Request, res: Response) {
    const chats = await this.chatService.getAllChats();
    res.status(200).json(chats);
  }

  async getChatById(req: Request, res: Response) {
    const chat = await this.chatService.getChatById(Number(req.params.id));
    if (!chat) {
      return res.status(404).json({ error: "Chat not found" });
    }
    res.status(200).json(chat);
  }

  async createChat(req: Request, res: Response) {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Invalid input data" });
    }
    const newChat = await this.chatService.createChat(name);
    res.status(201).json(newChat);
  }

  async updateChat(req: Request, res: Response) {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Invalid input data" });
    }
    const updatedChat = await this.chatService.updateChat(
      Number(req.params.id),
      name
    );
    if (!updatedChat) {
      return res.status(404).json({ error: "Chat not found" });
    }
    res.status(200).json(updatedChat);
  }

  async deleteChat(req: Request, res: Response) {
    const success = await this.chatService.deleteChat(Number(req.params.id));
    if (!success) {
      return res.status(404).json({ error: "Chat not found" });
    }
    res.status(204).send();
  }
}

export default ChatController;
