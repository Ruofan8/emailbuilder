import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})

export class LinkComponent {
  unsubscribe_text: string;
  unsubscribe_url: string;
  why_brunel_text: string;
  why_brunel_url: string;
  constructor(private injector: Injector) {
    this.unsubscribe_text = this.injector.get('unsubscribe_text');
    this.unsubscribe_url = this.injector.get('unsubscribe_url');
    this.why_brunel_text = this.injector.get('why_brunel_text');
    this.why_brunel_url = this.injector.get('why_brunel_url');
  }

}
