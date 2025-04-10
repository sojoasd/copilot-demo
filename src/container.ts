import { container, Lifecycle } from "tsyringe";
import { UserService } from "./services/user.service";
import { UserController } from "./controllers/user.controller";
import { ChatService } from "./services/chat.service";
import { ChatController } from "./controllers/chat.controller";

// 註冊 UserService 為 scope
container.register(UserService, { useClass: UserService }, { lifecycle: Lifecycle.ContainerScoped });

// 註冊 UserController 為 singleton
container.register(UserController, { useClass: UserController }, { lifecycle: Lifecycle.Singleton });

// 註冊 ChatService 為 scope
container.register(ChatService, { useClass: ChatService }, { lifecycle: Lifecycle.ContainerScoped });

// 註冊 ChatController 為 singleton
container.register(ChatController, { useClass: ChatController }, { lifecycle: Lifecycle.Singleton });