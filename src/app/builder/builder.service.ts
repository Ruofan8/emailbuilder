import { Injectable } from '@angular/core';

@Injectable()
export class BuilderService {

  constructor() {}

  getTemplate() {
    return Builders;
  }

}
const Builders = [
    {
      type: 'button',
      text: 'Activeer jouw Job Alert',
      activation_url: 'www.brunel.nl'
    },
    {
      type: 'text',
      text: '15+ best matchende resultaten van jouw Job Alert voor UX Designer in Amsterdam'
    }
  ]
