import 'reflect-metadata';
import express from "express";
import { container } from "tsyringe";
import { BookController } from "./modules/book/book.controller";
import userRoutes from './routes/user.routes';

const app = express();
const port = 3000;

app.use(express.json());

const bookController = container.resolve(BookController);

app.use("/api/book", bookController.router);
app.use('/api/user', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
