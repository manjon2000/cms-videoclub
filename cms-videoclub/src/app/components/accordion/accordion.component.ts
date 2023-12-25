import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @Input() title!: string;
  @Input() icon!: string;
  @Input() isExpand: boolean = false;


  fnExpandPanel() {
    this.isExpand = !this.isExpand;
    console.log('EXPAND')
  }

}
