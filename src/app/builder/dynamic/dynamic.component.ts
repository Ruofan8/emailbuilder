import {Component, Input, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver} from '@angular/core';
import {DynamicTextComponent} from '../dynamic-text/dynamic-text.component';
import {DynamicButtonComponent} from '../dynamic-button/dynamic-button.component';

@Component({
  selector: 'dynamic-component',
  entryComponents: [DynamicTextComponent, DynamicButtonComponent], // Reference to the components must be here in order to dynamically create them
  template: `
    <div #dynamicComponentContainer></div>
  `,
})
export class DynamicComponent {
  currentComponent = null;
  prevComponents = [];
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

  // component: Class for the component you want to create
  // props: An object with key/value pairs mapped to input name/input value
  @Input() set componentData(data: {component: any, props: any }) {
    if (!data) {
      return;
    }

    // props need to be in the following format to be resolved properly
    let inputProviders = Object.keys(data.props).map((inputName) => {return {provide: inputName, useValue: data.props[inputName]};});
    let resolvedprops = ReflectiveInjector.resolve(inputProviders);

    // We create an injector out of the data we want to pass down and this components injector
    let injector = ReflectiveInjector.fromResolvedProviders(resolvedprops, this.dynamicComponentContainer.parentInjector);

    // We create a factory out of the component we want to create
    let factory = this.resolver.resolveComponentFactory(data.component);

    // We create the component using the factory and the injector
    let component = factory.create(injector);

    // We insert the component into the dom container
    this.dynamicComponentContainer.insert(component.hostView);

    // We can destroy the old component is we like by calling destroy
    if (this.currentComponent) {
      //TODO: into a different file?
      this.prevComponents.push(this.currentComponent);
      this.currentComponent.destroy();
    }
    this.currentComponent = component;
    console.log(this.prevComponents)
  }

  constructor(private resolver: ComponentFactoryResolver) {

  }
}
