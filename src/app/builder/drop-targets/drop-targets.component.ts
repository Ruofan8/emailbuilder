import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drop-targets',
  templateUrl: './drop-targets.component.html',
  styleUrls: ['./drop-targets.component.css']
})
export class DropTargetsComponent {
  @Output() dropTargetData = new EventEmitter<any>(); // any to model refering to this.componentData

  constructor() { }
  active:string = '';

  onDragOver(ev: DragEvent) {
    ev.preventDefault();
    this.active = 'active';
  }
  onDragLeave(ev: DragEvent) {
    this.active = '';
  }
  onDrop(ev: DragEvent) {
    console.log(ev.dataTransfer.getData('Data'))
    this.dropTargetData.emit(ev);

  }
}
