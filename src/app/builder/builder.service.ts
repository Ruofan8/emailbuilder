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
  addRow(index:number, type:any) {
    let foundTemplate;
    Object.keys(Types).forEach( (key) => {
      let value = Types[key];
      console.log(Types[key])
      if (Types[key].type === type) {
          foundTemplate = Types[key];
      }
    });
      if (index === 0) {
          Builders.unshift(foundTemplate)
      } else {
        Builders.splice(index, 0, foundTemplate)
      }
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
const Types = [
  {
    type: 'text',
    text: 'Here is the text',
  },
  {
    type: 'button',
    text: 'Here is the text',
    activation_url: '{{activation_url}}'
  },
]
