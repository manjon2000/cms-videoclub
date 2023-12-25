import { Component, Input, ElementRef, ViewChild, OnChanges, SimpleChanges, AfterViewInit} from '@angular/core';



@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewInit, OnChanges {


  @ViewChild('input') input!: ElementRef; 

  @Input() type:      'text' | 'password' | 'email' | 'number' = 'text';
  @Input() value?:      string | number;
  @Input() isFocus?:    boolean = false;
  @Input() isError?:    boolean = false;
  @Input() isDisabled?: boolean = false;
  @Input() isReadOnly?: boolean = false;
  @Input() isPassword?: boolean = false;
  @Input() minValue!: number;
  @Input() maxValue!: number;

  ngAfterViewInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  fnFocus(): void {
    if(!this.isReadOnly || !this.isDisabled) {
      this.isFocus = !this.isFocus;
    }
  }

  fnBlur(): void {
    this.isFocus = false;
  }
  toggleType() {
    if(this.type === 'password') {
      this.type = 'text';
    }else {
      this.type = 'password';
    }
  }

  fnIncrement() {
    if(this.value && Number(this.value) <= this.maxValue) {
      this.value = Number(this.value) + 1;
    }
  }

  fnDecrement() {
    if(this.value) {
      this.value = Number(this.value) - 1;
    }
  }
}
