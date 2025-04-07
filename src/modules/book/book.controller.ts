import { Router, Request, Response } from "express";
import { injectable } from "tsyringe";
import { BookService } from "./book.service";

@injectable()
export class BookController {
  public router: Router;

  constructor(private bookService: BookService) {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.getAllBooks.bind(this));
    this.router.get("/:id", this.getBookById.bind(this));
    this.router.post("/", this.createBook.bind(this));
    this.router.put("/:id", this.updateBook.bind(this));
    this.router.delete("/:id", this.deleteBook.bind(this));
  }

  private async getAllBooks(req: Request, res: Response) {
    const books = await this.bookService.getAllBooks();
    res.status(200).json(books);
  }

  private async getBookById(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10); // 將 id 轉換為 number
    const book = await this.bookService.getBookById(id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(book);
  }

  private async createBook(req: Request, res: Response) {
    try {
      const book = await this.bookService.createBook(req.body);
      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ error: "Invalid input data" });
    }
  }

  private async updateBook(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10); // 將 id 轉換為 number
    const book = await this.bookService.updateBook(id, req.body);
      if (!book) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.status(200).json(book);
    } catch (error) {
      res.status(400).json({ error: "Invalid input data" });
    }
  }

  private async deleteBook(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10); // 將 id 轉換為 number
    const success = await this.bookService.deleteBook(id);
    if (!success) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(204).send();
  }
}
