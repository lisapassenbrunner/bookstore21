import { Component } from "@angular/core";

@Component({
  selector: "bs-root",
  template: `
  <bs-book-list *ngIf="listOn"></bs-book-list>"
  <bs-book-list *ngIf="detailsOn" [book]="book"></bs-book-details>"
  `,
  styles: []
})
export class AppComponent {
  listOn = true;
  detailsOn = false;

  book: Book;
}
