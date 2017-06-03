import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[dragTarget]',
    host: {
        '(dragover)': 'onDragOver($event)',
        '(drop)': 'onDrop($event)'
    }
})
export class DragTargetDirective {

    onDragOver(ev: DragEvent) {
      ev.preventDefault();
    }
    onDrop(ev: DragEvent) {
      console.log(this.host.nativeElement.innerHTML = ev.dataTransfer.getData('Data') )
    }
    constructor(private host: ElementRef) {
    }
}
