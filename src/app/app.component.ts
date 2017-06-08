import {Component} from '@angular/core';
import {MdCardModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {DynamicComponent} from './builder/dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  //TODO MAKE DYNAMIC SO DRAGGABLE CAN INSERT DATA IN BUILDER IN FORLOOP
  builders:Array<Object> = [
    {
      type: '',
      text: '',
      html: '',
    }
  ]

  createNewBuilder(index:number, data) {
    let array = this.builders,
    //TODO: dynamic items instead of obj
    obj = { type: '', text: '', html:data};
    if (index === 0) {
        array.unshift(obj)
    } else {
      array.splice(index, 0, obj)

    }
    this.builders = array;
  }

  insertData(data: any, i: number) {
    this.builders[i] = data.props;
  }

  getDropTargetData(ev: DragEvent, i:number){
    let data = ev.dataTransfer.getData('Data')
    this.createNewBuilder(i, data)
    console.log(data)
  }
}
