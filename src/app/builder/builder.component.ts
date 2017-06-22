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
  exportJSON() {
    var blob = new Blob([JSON.stringify(this.builders)], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "hello world.txt");
  }
  importJSON($event) : void {
    var file:File = $event.target.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.service.setTemplate(JSON.parse(myReader.result));
      this.builders = this.service.getTemplate();
    }

    myReader.readAsText(file);
 }
}
