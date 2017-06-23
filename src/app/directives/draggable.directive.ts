import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[draggable]',
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
        // console.log(host)
    }

    onDragStart(ev: DragEvent) {
        ev.dataTransfer.setData('Index', this.host.nativeElement.getAttribute('index'));
    }
    onDragOver(ev: DragEvent) {
        // console.log("Drag Over");
    }
    onDragLeave(ev: DragEvent) {
        // console.log("Drag Leave");
    }
    onDragEnter(ev: DragEvent) {
        // console.log("Drag enter");
    }

}
