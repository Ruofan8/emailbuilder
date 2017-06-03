import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[myDraggable]',
    host: {
        '(dragstart)': 'onDragStart($event)',
        '(dragover)': 'onDragOver($event)',
        '(dragleave)': 'onDragLeave($event)',
        '(dragenter)': 'onDragEnter($event)',
    }
})
export class DraggableDirective {

    constructor(private host: ElementRef) {
        host.nativeElement.setAttribute('draggable', 'true');
    }

    onDragStart(ev: DragEvent) {
        ev.dataTransfer.setData('Data', this.host.nativeElement.innerHTML);
    }
    onDragOver(ev: DragEvent) {
        console.log("Drag Over");
    }
    onDragLeave(ev: DragEvent) {
        console.log("Drag Leave");
    }
    onDragEnter(ev: DragEvent) {
        console.log("Drag enter");
    }

}
