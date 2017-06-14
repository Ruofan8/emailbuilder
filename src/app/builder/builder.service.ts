import { Injectable } from '@angular/core';

@Injectable()
export class BuilderService {

  constructor() {}

  getTemplate() {
    return Builders;
  }
  changeTemplate(index:number, template:any) {
    Builders[index] = template;
  }
}
const Builders = [
    {
      type: 'note-top',
      email_to: 'jobalert@brunel.net',
      email_text: 'Please add jobalert@brunel.net to your address list to be sure that you will receive your Job Alert.',
      online_text: 'If you are not able to read this email properly, please view the online-version',
      online_version_url: '{{online_version_url}}'
    },
    {
      type: 'logo',
      website_url: '{{website_url}}',
      website_logo_url: '{{website_logo_url}}'
    },
    {
      type: 'text',
      text: '15+ best matchende resultaten van jouw Job Alert voor UX Designer in Amsterdam'
    },
    {
      type: 'button',
      text: 'Activeer jouw Job Alert',
      activation_url: '{{activation_url}}'
    },
  ]
