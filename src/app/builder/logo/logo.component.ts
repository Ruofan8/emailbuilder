import { Component, Injector } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  website_url;
  website_logo_url;

  constructor(private injector: Injector) {
    this.website_url = this.injector.get('website_url');
    this.website_logo_url = this.injector.get('website_logo_url');

  }
}
