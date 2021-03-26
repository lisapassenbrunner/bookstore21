import { Component, OnInit } from '@angular/core';
import {Book} from '../shared/book';

@Component({
  selector: 'bs-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input() book : Book

  constructor() { }

  ngOnInit() {
  }

  getRating(num: number){
    return new Array(num);
  }

}