import { Component, Injector } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  text;
  activation_url;

  constructor(private injector: Injector) {
    this.text = this.injector.get('text');
    this.activation_url = this.injector.get('activation_url');
  }

}
