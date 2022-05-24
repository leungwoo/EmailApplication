import { Component, Input, OnInit } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent {
 @Input() email:Email;
 showModal=false;

  constructor(private emailService:EmailService) { 
    
  }

  ngOnChanges() {
    const text = this.email.text.replace(/\n/gi, '\n> '); //look for every new line across the entire string and replace it with etc
    this.email = {
     ... this.email, //spread operator in typescript
      from:this.email.to,
      to:this.email.from,
      subject: 'RE:' + this.email.subject,
      text:
      `\n\n\n----- ${this.email.from} wrote:\n>${text}`

    }
    
  }
 onSubmit(email:Email){
   this.emailService.sendEmail(email).subscribe(()=>{this.showModal=false})
 }
}
