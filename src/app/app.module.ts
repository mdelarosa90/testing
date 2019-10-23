import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { ArraysAndStringsComponent } from './arrays-and-strings/arrays-and-strings.component';
import { SetupAndTearDownComponent } from './setup-and-tear-down/setup-and-tear-down.component';
import { FormsComponent } from './forms/forms.component';
import { EventEmittersComponent } from './event-emitters/event-emitters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AlertButtonComponent,
    FundamentalsComponent,
    ArraysAndStringsComponent,
    SetupAndTearDownComponent,
    FormsComponent,
    EventEmittersComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    // HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
