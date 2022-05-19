import { Component, OnInit, ElementRef,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
@Output() dismiss = new EventEmitter();
  constructor(private el:ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }
ngDestory(){
  this.el.nativeElement.remove();
}

onDismissClick(){
  this.dismiss.emit();
}
}
