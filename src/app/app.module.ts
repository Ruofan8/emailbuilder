import 'hammerjs';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {MaterialModule} from '@angular/material';
import {MenuComponent} from './menu/menu.component';
import {BuilderComponent} from './builder/builder.component';
import {DynamicComponent} from './builder/dynamic/dynamic.component';
import {DynamicTextComponent} from './builder/dynamic-text/dynamic-text.component';
import {DynamicButtonComponent} from './builder/dynamic-button/dynamic-button.component';
import {DraggableDirective} from './directives/draggable.directive';
import {DragTargetDirective} from './directives/drag-target.directive';
import { DropTargetsComponent } from './builder/drop-targets/drop-targets.component';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    MenuComponent,
    DynamicComponent,
    DynamicTextComponent,
    DynamicButtonComponent,
    DraggableDirective,
    DragTargetDirective,
    DropTargetsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
