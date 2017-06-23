import { Injectable } from '@angular/core';

@Injectable()
export class BuilderService {

  constructor() {}
  addRow(index:number, type:any) {
    let foundTemplate;
    Object.keys(Types).forEach( (key) => {
      let value = Types[key];
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
  changeTemplate(index:number, template:any) {
    console.log(template)
    Builders[index] = template;
  }
  repositionTemplate(sourceIndex:number, targetIndex) {
    var sourceTemplate = Builders[sourceIndex];
    Builders.splice(sourceIndex, 1);
    Builders.splice(targetIndex, 0, sourceTemplate)
  }
  getTemplate() {
    return Builders;
  }
  setTemplate(template:any){
    Builders = template;
  }
}
var Builders = [
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
