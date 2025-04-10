import { injectable } from 'tsyringe';

interface Chat {
  id: number;
  name: string;
  createdAt: string;
}

@injectable()
export class ChatService {
  private chats: Chat[] = [];
  private nextId = 1;

  getAllChats(): Chat[] {
    return this.chats;
  }

  getChatById(id: number): Chat | undefined {
    return this.chats.find(chat => chat.id === id);
  }

  createChat(name: string): Chat {
    const newChat: Chat = {
      id: this.nextId++,
      name,
      createdAt: new Date().toISOString().split('T')[0],
    };
    this.chats.push(newChat);
    return newChat;
  }

  updateChat(id: number, name: string): Chat | undefined {
    const chat = this.getChatById(id);
    if (chat) {
      chat.name = name;
    }
    return chat;
  }

  deleteChat(id: number): boolean {
    const index = this.chats.findIndex(chat => chat.id === id);
    if (index !== -1) {
      this.chats.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default ChatService;
