import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import { Email } from '../email';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  emailForm:FormGroup;
@Input() email:Email;
@Output() emailSubmit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    const { subject, from, to, text} = this.email;

    this.emailForm = new FormGroup ({
      to: new FormControl(to,[Validators.required, Validators.email]),
      from: new FormControl({value:from, disabled:true}), //disabled the field from user input
      subject: new FormControl(subject,[Validators.required]),
      text: new FormControl(text,[Validators.required])
    })

  }
onSubmit(){
  if (this.emailForm.invalid){
    
  }
  //console.log(this.emailForm.getRawValue())//getrawvalue helps to display the disabled "from: field"
  this.emailSubmit.emit(this.emailForm.value);
}

}
//gave the form control default values from the parent component by adding in the const parameters