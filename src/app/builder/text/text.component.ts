import { Component, Injector } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {

  text;

  constructor(private injector: Injector) {
    this.text = this.injector.get('text');
  }

}
