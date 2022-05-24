import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnInit {
  email:Email;
showModal=false;

  constructor(private emailService:EmailService,
    private authService:AuthService) { 
    this.email={
      id:'',
      subject:'',
      to:'',
      from:`${authService.username}@angular-email.com`,
      text:'',
      html:''
    }
  }

  ngOnInit(): void {
    
  }
 onSubmit(){
   
 }
}
