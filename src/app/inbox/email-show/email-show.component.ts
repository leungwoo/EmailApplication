import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';import { switchMap } from 'rxjs';
import { Email } from '../email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
public email:Email;

  constructor(private route:ActivatedRoute,
    ) {
      this.route.data.subscribe(({email})=>{this.email=email})
     }

  ngOnInit() {
   
    // this.route.params.subscribe(({id})=>{
    //   this.emailService.getEmail(id).subscribe((email)=>{console.log(email)})
    // })

//     this.route.params.pipe(
//       switchMap(({id})=>{
// return this.emailService.getEmail(id)
//       })
//     ).subscribe((email)=>{this.email=email})



}
}