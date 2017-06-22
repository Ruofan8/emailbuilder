import { Component, OnInit } from '@angular/core';
import { BuilderService} from './builder.service'
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})

export class BuilderComponent implements OnInit {
  builders: Array<Object>;

  constructor(private service: BuilderService) { }
  ngOnInit() {
    this.builders = this.service.getTemplate();
  }
  exportHTML()  {
    var appBuilder:any  = document.querySelectorAll('app-builder')[0].innerHTML
    var blob = new Blob([appBuilder], {type: "text/plain;charset=utf-8"});
    //TODO: missing css
    FileSaver.saveAs(blob, "rendered.html");
  }
  exportJSON() {
    var blob = new Blob([JSON.stringify(this.builders)], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "template.txt");
  }
  importJSON($event) : void {
    var file:File = $event.target.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      if(this.isJson(myReader.result)){
        this.service.setTemplate(JSON.parse(myReader.result));
        this.builders = this.service.getTemplate();
      } else {
        alert("Invalid builder JSON")
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
