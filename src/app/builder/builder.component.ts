import { Component } from '@angular/core';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})

export class BuilderComponent {
  componentData = null;
  agreed = 0;
  disagreed = 0;
  onVoted(data) {
    this.componentData = data;
  }
  constructor() { }
}
