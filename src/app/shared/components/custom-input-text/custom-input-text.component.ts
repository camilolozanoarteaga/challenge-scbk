import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input-text',
  templateUrl: './custom-input-text.component.html',
  styleUrls: ['./custom-input-text.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputTextComponent),
      multi: true,
    },
  ],
})
export class CustomInputTextComponent implements OnInit, ControlValueAccessor {
  @Input() inputType: string;
  @Input() inputPlaceholder: string;

  type: string;
  placeholder: string;

  input: string;

  constructor() {}

  ngOnInit(): void {
    this.type = this.inputType;
    this.placeholder = this.inputPlaceholder;
  }

  onChange: any = () => {};
  onTouch: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(input: string): void {
    this.input = input;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.' + isDisabled);
  }
}
