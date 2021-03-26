import { Component } from "@angular/core";

@Component({
  selector: "bs-root",
  template: `
  <bs-book-list *ngIf="listOn" (showDetailsEvent)="showDetails($event)></bs-book-list>"
  <bs-book-list *ngIf="detailsOn" [book]="book" (showListEvent)="showList()"></bs-book-details>"
  `,
  styles: []
})
export class AppComponent {
  listOn = true;
  detailsOn = false;

  book: Book;

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(book: Book) {
    this.book = book;
    this.listOn = false;
    this.detailsOn = true;
  }
}
