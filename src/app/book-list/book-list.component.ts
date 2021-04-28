import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  arr = []
  showDeleteMessage: boolean
  searchText: string = ""

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

  onDelete($key) {
    if (confirm('Are you sure to delete this record?')) {
      this.bookService.deleteBook($key)
      this.showDeleteMessage = true
      setTimeout(() => this.showDeleteMessage = false, 3000)
    }
  }
  
  clearSearchInput() {
    this.searchText = ""
  }

  filterTable(infos) {
    return infos.username.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1
  }
}
