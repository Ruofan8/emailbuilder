import { Component, Output, EventEmitter } from '@angular/core';
import { MdButtonModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() selectedType = new EventEmitter<string>();

  selectType(type:string) {
    console.log(type)
    this.selectedType.emit(type);
  }
  constructor() { }

}
