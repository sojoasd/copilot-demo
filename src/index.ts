import "reflect-metadata";
import express from "express";
import { container } from "tsyringe";
import "./container"; // Import the container to register services
import createUserRoutes from "./routes/user.routes";
import createChatRoutes from "./routes/chat.routes";
import { UserController } from "./controllers/user.controller";
import { ChatController } from "./controllers/chat.controller";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/user", createUserRoutes(container.resolve(UserController)));
app.use("/api/chat", createChatRoutes(container.resolve(ChatController)));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
