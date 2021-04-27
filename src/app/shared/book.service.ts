import { Injectable } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  form = new FormGroup({
    $key: new FormControl(null),
    bookName: new FormControl(''),
    bookGenre: new FormControl(''),
    author: new FormControl('')
  })
}
