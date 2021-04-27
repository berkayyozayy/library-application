import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service'

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  isSubmit: boolean
  showSuccessMessage: boolean
  formControls = this.bookService.form.controls

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmit = true
    if (this.bookService.form.get('$key').value == null) {
      this.bookService.insertBook(this.bookService.form.value)
      this.showSuccessMessage = true
      this.clearInputs()
      setTimeout(() => this.showSuccessMessage = false, 3000)
      this.isSubmit = false
    }
  }

  clearInputs() {
    this.bookService.form.reset()
  }

}
