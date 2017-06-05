import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DynamicComponent} from './dynamic/dynamic.component';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})

export class BuilderComponent {
  componentData = null;
  @Input() text: string;
  @Output() passData: EventEmitter<any> = new EventEmitter<any>();

  insertData(data) {
    this.componentData = data;
    this.passData.emit(data);
  }
}
