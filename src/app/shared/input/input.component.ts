import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() label: string = '';
  @Input() set control(value: AbstractControl | null) {
    this._control = value;
  }
  public get control(): FormControl {
    return this._control as FormControl;
  }
  private _control: AbstractControl | null = null;
  constructor() {}

  ngOnInit(): void {}
}
