import {Component, Input} from '@angular/core';
import {HelloWorldComponent} from '../hello-world/hello-world.component';
import {DynamicComponent} from './dynamic/dynamic.component';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})

export class BuilderComponent {
  mdTooltipPosition: 'above';
  @Input() text: string;
  componentData = null;
  agreed = 0;
  disagreed = 0;
  insertData(data) {
    this.componentData = data;
  }
  constructor() { }
}
