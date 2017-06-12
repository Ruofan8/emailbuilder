import { Component, OnInit } from '@angular/core';
import { BuilderService} from './builder.service'
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';

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

}
