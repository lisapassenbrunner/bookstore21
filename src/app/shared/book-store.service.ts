import { Injectable } from "@angular/core";
import { Book, Author, Image } from "./book";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable()
export class BookStoreService {
  private api = "https://bookstore21.s1810456024.student.kwmhgb.at/api";
  books: Book[];

  constructor(private http: HttpClient) {}

//holt Daten aus der Datenbank
  getAll(): Observable<Array<Book>> {
    return this.http
      .get(`${this.api}/books`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  getSingle(isbn: string): Book {
    return null;
    // return this.books.find(book => book.isbn === isbn);
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
