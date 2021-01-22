import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  name:String='';
  email:String='';
  message:String='';

  constructor(
    private db: AngularFireDatabase,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }
  submit(){
    this.spinner.show();
    console.log('Adding');
    this.db

  }

}
