import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = ""
  password = ""
  message = ""
  errorMessage = "" 
  error: {
    name: string,
    message: string
  } = {
    name: "",
    message: ""
  };

  constructor() { }

  ngOnInit(): void {
  }
}
