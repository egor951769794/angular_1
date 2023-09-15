import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomeModule } from './modules/SomeModule/some.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
