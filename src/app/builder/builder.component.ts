import { Component, OnInit } from '@angular/core';
import { MdCardModule } from '@angular/material';
import { BuilderService} from './builder.service'
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  builders: Array<Object>;
  constructor(private service: BuilderService) { }
  componentData = null;

  createTextComponent(template:any){
    this.componentData = {
      component: TextComponent,
      inputs: {
        text: template.text
      }
    };
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
  ngOnInit() {
    this.builders = this.service.getTemplate();
    Object.keys(this.builders).forEach( (i) =>{
      let template = this.builders[i]
      switch(template.type) {
        case('text'):
          this.createTextComponent(template);
        break;
        case('button'):
          this.createButtonComponent(template);
        break;
      }
    });
  }

}
