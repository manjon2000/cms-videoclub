import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  @Input() identify?: string  = 'is';
  @Input() nameInput?: string = 'amarillo';
  @Input() isActived?: boolean = false;
  @Output() valueInput: EventEmitter<boolean> = new EventEmitter();


  onChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement);
    this.isActived = inputValue.checked;
    this.valueInput.emit(inputValue.checked);
  }
}
