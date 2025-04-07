import { injectable } from "tsyringe";

interface Book {
  id: number;
  title: string;
  author: string;
  publishedDate: string;
  price: number;
  category: string;
}

@injectable()
export class BookService {
  private books: Book[] = [];
  private currentId: number = 1;

  public async getAllBooks(): Promise<Book[]> {
    return this.books;
  }

  public async getBookById(id: number): Promise<Book | undefined> {
    return this.books.find((book) => book.id === id);
  }

  public async createBook(data: Omit<Book, "id">): Promise<Book> {
    const newBook: Book = { id: this.currentId++, ...data };
    this.books.push(newBook);
    return newBook;
  }

  public async updateBook(id: number, data: Omit<Book, "id">): Promise<Book | undefined> {
    const index = this.books.findIndex((book) => book.id === id);
    if (index === -1) return undefined;
    this.books[index] = { id, ...data };
    return this.books[index];
  }

  public async deleteBook(id: number): Promise<boolean> {
    const index = this.books.findIndex((book) => book.id === id);
    if (index === -1) return false;
    this.books.splice(index, 1);
    return true;
  }
}
