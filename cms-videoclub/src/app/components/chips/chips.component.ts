import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {
  @Input() type: 'success' | 'danger' | 'warning' | 'neutral' = 'success';
  @Input() title!: string;
  @Input() isCustom?:  boolean = false;
  @Input() background?: string;
  @Input() textColor?: string;
}
