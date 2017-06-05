import {Directive, ElementRef, Output, EventEmitter} from '@angular/core';

@Directive({
    selector: '[dragTarget]',
    host: {
        '(dragover)': 'onDragOver($event)',
        '(drop)': 'onDrop($event)'
    }
})
export class DragTargetDirective {
    @Output() passData = new EventEmitter<any>(); // any to model refering to this.componentData

    onDragOver(ev: DragEvent) {
      ev.preventDefault();
    }
    onDrop(ev: DragEvent) {
      if (this.host.nativeElement.nodeName === 'APP-BUILDER') {
        console.log(ev.dataTransfer.getData('Data'))
        this.host.nativeElement.innerHTML = ev.dataTransfer.getData('Data')
      }
    }
    constructor(private host: ElementRef) {
    }
}
