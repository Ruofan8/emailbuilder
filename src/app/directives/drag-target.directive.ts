import {Directive, ElementRef, Output, EventEmitter} from '@angular/core';
import { BuilderService } from '../builder/builder.service'


@Directive({
    selector: '[dragTarget]',
    host: {
        '(dragover)': 'onDragOver($event)',
        '(drop)': 'onDrop($event)'
    }
})
export class DragTargetDirective {
    @Output() passData = new EventEmitter<any>(); // any to model refering to this.componentData
    /**
     * preventDefault has to be set, otherwise the drop event won't happen.
     */
    onDragOver(ev: DragEvent) {
      ev.preventDefault();
    }
    onDrop(ev: DragEvent) {
      var sourceIndex = ev.dataTransfer.getData('Index');
      var targetIndex = this.host.nativeElement.getAttribute('Index')
      this.service.repositionTemplate(parseInt(sourceIndex), targetIndex)
      // if (this.host.nativeElement.nodeName === 'APP-BUILDER') {
      // }
    }
    constructor(private host: ElementRef, private service: BuilderService) {
    }
}
