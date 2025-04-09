import 'reflect-metadata';
import express from "express";
import { container } from "tsyringe";
import createUserRoutes from './routes/user.routes';
import { UserController } from './controllers/user.controller';

const app = express();
const port = 3000;

app.use(express.json());

// container.register(UserController, { useClass: UserController });
const userController = container.resolve(UserController);

app.use('/api/user', createUserRoutes(userController));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
