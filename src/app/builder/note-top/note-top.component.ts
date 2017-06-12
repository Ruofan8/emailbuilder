import { Component, Injector } from '@angular/core';

@Component({
  selector: 'app-note-top',
  templateUrl: './note-top.component.html',
  styleUrls: ['./note-top.component.css']
})
export class NoteTopComponent {
    email_to;
    email_text;
    online_text;
    online_version_url;

  constructor(private injector: Injector) {
    this.email_to = this.injector.get('email_to');
    this.email_text = this.injector.get('email_text');
    this.online_text = this.injector.get('online_text');
    this.online_version_url = this.injector.get('online_version_url');
  }

}
