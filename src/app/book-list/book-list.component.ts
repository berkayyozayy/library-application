import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  arr = []

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(obj => {
      this.arr = obj.map((item) => {
        return {
          $key: item.key,
          ...item.payload.val()
        }
      })
    })
  }
}
