import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { ArraysAndStringsComponent } from './arrays-and-strings/arrays-and-strings.component';
import { SetupAndTearDownComponent } from './setup-and-tear-down/setup-and-tear-down.component';
import { FormsComponent } from './forms/forms.component';
import { EventEmittersComponent } from './event-emitters/event-emitters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoterComponent } from './voter/voter.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { routes } from './app.routes';
import { NavComponent } from './nav/nav.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    AlertButtonComponent,
    FundamentalsComponent,
    ArraysAndStringsComponent,
    SetupAndTearDownComponent,
    FormsComponent,
    EventEmittersComponent,
    VoterComponent,
    UserDetailsComponent,
    HomeComponent,
    UsersComponent,
    NavComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    // HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
