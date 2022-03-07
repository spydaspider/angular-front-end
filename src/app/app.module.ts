import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonXComponent } from './button-x/button-x.component';
import { SmallXComponent } from './small-x/small-x.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonXComponent,
    SmallXComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
