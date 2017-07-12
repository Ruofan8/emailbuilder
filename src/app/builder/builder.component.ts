import { Component, OnInit } from '@angular/core';
import { BuilderService} from './builder.service'
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';
import * as FileSaver from 'file-saver';
import mandrill from 'mandrill-api/mandrill';
@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})

export class BuilderComponent implements OnInit {
  builders: Array<Object>;
  buildersString: string;
  mandrilTemplatesList: Array<object>;

  constructor(private service: BuilderService) {  }
  ngOnInit() {
    this.builders = this.service.getTemplate();
    this.buildersString = JSON.stringify(this.builders);
    const mandrill_client = new mandrill.Mandrill('PS9odNH5RBfJUncs07L3gA');
    const template = {
      name: 'JobAlert Activation - BE',
      text: this.buildersString
    };
    const _this = this;
    // mandrill_client.templates.update(template, function(result) {
    //     console.log(result);
    // });

    mandrill_client.templates.list({label: 'jobalert'}, function(result) {
      console.log(result)
      _this.mandrilTemplatesList = result;
    })
  }
  exportHTML()  {
    const appBuilder:any  = document.querySelectorAll('app-builder')[0].innerHTML
    const blob = new Blob([appBuilder], {type: 'text/plain;charset=utf-8'});
    // TODO: missing css
    FileSaver.saveAs(blob, 'rendered.html');
  }
  exportJSON() {
    const blob = new Blob([JSON.stringify(this.builders)], {type: 'text/plain;charset=utf-8'});
    FileSaver.saveAs(blob, 'template.txt');
  }
  importJSON($event) : void {
    const file:File = $event.target.files[0];
    const myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      if(this.isJson(myReader.result)){
        this.service.setTemplate(JSON.parse(myReader.result));
        this.builders = this.service.getTemplate();
      } else {
        alert('Invalid builder JSON');
      }
    }

    myReader.readAsText(file);
 }
 isJson(data:any) {
   return (/^[\],:{}\s]*$/.test(data.replace(/\\["\\\/bfnrtu]/g, '@').
    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    replace(/(?:^|:|,)(?:\s*\[)+/g, '')))
 }
}
