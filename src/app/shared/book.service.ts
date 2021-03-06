import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private firebase: AngularFireDatabase) { }

  bookList: AngularFireList<any>

  form = new FormGroup({
    $key: new FormControl(null),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    bookName: new FormControl('', Validators.required),
    bookGenre: new FormControl(''),
    author: new FormControl('')
  })

  getBooks() {
    this.bookList = this.firebase.list('books')
    return this.bookList.snapshotChanges()
  }

  insertBook(infos) {
    this.bookList.push({
      username: infos.username,
      email: infos.email,
      bookName: infos.bookName,
      bookGenre: infos.bookGenre,
      author: infos.author
    })
  }

  deleteBook($key: string) {
    this.bookList.remove($key)
  }

  populateForm(infos) {
    this.form.setValue(infos)
  }

  updateInfos(infos) {
    this.bookList.update(infos.$key, {
      username: infos.username,
      email: infos.email,
      bookName: infos.bookName,
      bookGenre: infos.bookGenre,
      author: infos.author
    })
  }
}
