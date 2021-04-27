import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  form = new FormGroup({
    $key: new FormControl(null),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    bookName: new FormControl('', Validators.required),
    bookGenre: new FormControl(''),
    author: new FormControl('')
  })
}
