import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  email:Email;
  showModal = false;
  constructor(private authService:AuthService) { 
    this.email={
      id:'',
      to:'',
      subject:'',
      html:'',
      text:'',
      from:`${this.authService.username}@angular-this.email.com`
    }
  }

  ngOnInit(): void {
  }
 
}
//created default fields to pass down to the child component (emailform)