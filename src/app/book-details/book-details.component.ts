import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "../shared/book";
import { BookStoreService } from "../shared/book-store.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "bs-book-details",
  templateUrl: "./book-details.component.html",
  styles: []
})
export class BookDetailsComponent {
  constructor(private bs: BookStoreService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.book = this.bs.getSingle(params["isbn"]);
  }

  @Input() book: Book;
  @Output() showListEvent = new EventEmitter<any>();

  getRating(num: number) {
    return new Array(num);
  }

  
}


