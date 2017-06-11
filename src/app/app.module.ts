import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { BuilderComponent } from './builder/builder.component';
import 'hammerjs';
import { TextComponent } from './builder/text/text.component';
import { BuilderService} from './builder/builder.service'

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    MenuComponent,
    TextComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [BuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
