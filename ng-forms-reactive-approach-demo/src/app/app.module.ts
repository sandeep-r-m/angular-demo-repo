import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NestedFormGroupComponent } from './nested-form-group/nested-form-group.component';
import { SimpleFormGroupComponent } from './simple-form-group/simple-form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    NestedFormGroupComponent,
    SimpleFormGroupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
