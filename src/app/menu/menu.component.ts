import {Component, Output, EventEmitter} from '@angular/core';
import {MdButtonModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {DynamicTextComponent} from '../builder/dynamic-text/dynamic-text.component';
import {DynamicButtonComponent} from '../builder/dynamic-button/dynamic-button.component';
import {DynamicComponent} from '../builder/dynamic/dynamic.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  componentData = null;
  @Output() passData = new EventEmitter<any>(); // any to model refering to this.componentData

  createDynamicTextComponentComponent(){
    this.componentData = {
      component: DynamicTextComponent,
      inputs: {
        showNum: 9
      }
    };
    this.passData.emit(this.componentData);
  }
  createDynamicButtonComponentComponent(){
    this.componentData = {
      component: DynamicButtonComponent,
      inputs: {
        showNum: 9
      }
    };
    this.passData.emit(this.componentData);
  }
  constructor() { }
}
