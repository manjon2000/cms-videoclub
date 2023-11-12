import { Component, Input } from '@angular/core';


interface ListItemsSubmenu {
  icon?: string;
  title: string;
  link: string;
}

@Component({
  selector: 'ui-list-dropdown',
  templateUrl: './list-dropdown.component.html',
  styleUrls: ['./list-dropdown.component.scss']
})
export class ListDropdownComponent {

  @Input()
  isActived: boolean = false;

  @Input()
  title!: string;

  @Input()
  iconItem!: string;

  @Input()
  itemLink!: string;

  @Input()
  isListDropdown!: boolean;

  @Input()
  listSubmenu!: ListItemsSubmenu[];


  expandedListDropdown: boolean = false;

  expandSubmenu() {
    if(this.isListDropdown) {
      this.expandedListDropdown = !this.expandedListDropdown; 
    }
  }  
}
