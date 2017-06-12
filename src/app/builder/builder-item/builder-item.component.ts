  import { Component, OnInit, Input } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { TextComponent } from '../text/text.component';
import { ButtonComponent } from '../button/button.component';
import { NoteTopComponent } from '../note-top/note-top.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-builder-item',
  templateUrl: './builder-item.component.html',
  styleUrls: ['./builder-item.component.css']
})
export class BuilderItemComponent implements OnInit {
  componentData = null;
  @Input('parentTemplate') template: any;

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
  constructor() { }

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
