import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private db: AngularFireDatabase,
    private spinner: NgxSpinnerService
  ) {}

  signup() {
    //show spiner
    this.spinner.show();
    console.log('Adding');
    this.db
      .list('users')
      .push({ emailAddress: this.email, passwordUser: this.password })
      .then(
        (data) => {
          console.log('Added', data);
          this.spinner.hide();
          //hide spinner
        },
        (error) => {
          console.log(error);
          this.spinner.hide();

          //hide spinner
        }
      );
  }

  ngOnInit(): void {}
}
