import { Component, OnInit, Input } from '@angular/core';
import { TextComponent } from '../text/text.component';
import { ButtonComponent } from '../button/button.component';
import { MdCardModule } from '@angular/material';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-builder-item',
  templateUrl: './builder-item.component.html',
  styleUrls: ['./builder-item.component.css']
})
export class BuilderItemComponent implements OnInit {
  componentData = null;
  @Input('parentTemplate') template: any;

  createTextComponent(template:any){
    this.componentData = {
      component: TextComponent,
      inputs: {
        text: template.text
      }
    };
    console.log(this.componentData)
  }

  createButtonComponent(template:any){
    this.componentData = {
      component: ButtonComponent,
      inputs: {
        text: template.text,
        activation_url: template.activation_url
      }
    };
  }
  constructor() { }

  ngOnInit() {
    console.log(this.template)
    switch(this.template.type) {
      case('text'):
        this.createTextComponent(this.template);
      break;
      case('button'):
        this.createButtonComponent(this.template);
      break;
    }
  }

}
