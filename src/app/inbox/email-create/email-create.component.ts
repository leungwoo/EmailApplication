import { Component, OnInit } from '@angular/core';
import { Email } from '../email';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  email:Email;
  showModal = false;
  constructor() { 
    this.email={
      id:'',
      to:'',
      subject:'',
      html:'',
      text:'',
      from:'test11011@angular-this.email.com'
    }
  }

  ngOnInit(): void {
  }
 
}
//created defualt fields to pass down to the child component (emailform)