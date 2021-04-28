import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ""
  password = ""
  errorMessage = ""
  error: {
    name: string,
    message: string
  } = {
    name: "",
    message: ""
  }

  ngOnInit(): void {
  }
}
