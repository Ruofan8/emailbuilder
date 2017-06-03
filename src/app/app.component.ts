import {Component} from '@angular/core';
import {MdCardModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';

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
      type: 'text',
      text: 'Vacatures voor',
    },
    {
      type: 'button',
      text: 'Picture',
    },
    {
      type: 'button',
      text: 'Activeren',
    }
  ]

  createNewBuilder(index:number) {
    let array = this.builders,
    obj = { type: 'text', text: 'empty'};
    if (index === 0) {
        array.unshift(obj)
    } else {
      console.log(array[index])
      array.splice(index, 0, obj)

    }
    this.builders = array;
  }
}
