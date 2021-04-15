import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.myForm = this.fb.group({
      userName: ["", Validators.minLength(5)],
      password: ["", Validators.required],
    })
  }
}