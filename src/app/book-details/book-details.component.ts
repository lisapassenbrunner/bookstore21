import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Book } from "../shared/book";
import { BookStoreService } from "../shared/book-store.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "bs-book-details",
  templateUrl: "./book-details.component.html",
  styles: []
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(private bs: BookStoreService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.bs.getSingle(params["isbn"]).subscribe(b => (this.book = b));
  }

  getRating(num: number) {
    return new Array(num);
  }

  removeBook() {
    if (confirm("Buch löschen? Sind sie sicher?")) {
      console.log("delete");
    }
  }
}
