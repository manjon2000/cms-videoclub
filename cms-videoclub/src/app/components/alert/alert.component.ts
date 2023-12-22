import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Input() state: 'success' | 'danger' | 'warning' | 'info' = 'success';
  @Input() label!: string;
  @Input() icon!: string;
  @Output() closeAlertEmmiter?: EventEmitter<boolean> = new EventEmitter();
  

  fnCloseAlertEmmiter() {
    this.closeAlertEmmiter?.emit(true);
  }
}
