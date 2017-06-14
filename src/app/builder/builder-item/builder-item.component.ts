import { Component, OnInit, Input } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { TextComponent } from '../text/text.component';
import { ButtonComponent } from '../button/button.component';
import { NoteTopComponent } from '../note-top/note-top.component';
import { LogoComponent } from '../logo/logo.component';
import { BuilderService } from '../builder.service'

@Component({
  selector: 'app-builder-item',
  templateUrl: './builder-item.component.html',
  styleUrls: ['./builder-item.component.css']
})
export class BuilderItemComponent implements OnInit {
  componentData = null;
  templateData = null;
  status = false;
  @Input('parentTemplate') template: any;
  @Input('parentIndex') index: number;

  clicked():void {
    let template = this.template,
    arr = [];
    this.status = !this.status;
    Object.keys(template).forEach( (key) => {
      let value = template[key];
      arr.push({key: key, value: value})
    });
    this.templateData = arr;
  }
  update(newTemplate:any) {
    console.log(newTemplate)
    let i = this.index;
    let obj = {};
    Object.keys(newTemplate).forEach( (key) => {
      let value = newTemplate[key];
      obj[newTemplate[key].key] = newTemplate[key].value
    });
    this.service.changeTemplate(i, obj)

  }
  createText(template:any){
    this.componentData = {
      component: TextComponent,
      inputs: {
        text: template.text
      }
    };
  }
  createButton(template:any){
    this.componentData = {
      component: ButtonComponent,
      inputs: {
        text: template.text,
        activation_url: template.activation_url
      }
    };
  }
  createNoteTop(template:any){
    this.componentData = {
      component: NoteTopComponent,
      inputs: {
        email_to: template.email_to,
        email_text: template.email_text,
        online_text: template.online_text,
        online_version_url: template.online_version_url
      }
    };
  }
  createLogo(template:any){
    this.componentData = {
      component: LogoComponent,
      inputs: {
        website_url: template.website_url,
        website_logo_url: template.website_logo_url
      }
    };
  }
  constructor(private service: BuilderService) { }

  ngOnInit() {
    switch(this.template.type) {
      case('text'):
        this.createText(this.template);
      break;
      case('button'):
        this.createButton(this.template);
      break;
      case('note-top'):
        this.createNoteTop(this.template);
      break;
      case('logo'):
      this.createLogo(this.template);
      break;
    }
  }

}
