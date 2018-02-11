import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {Mailer} from './mailer';
import {AdvanceMailer} from './advance-mailer';
import {MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Mailer, {provide: 'GOOGLE_ANALYTICS_ID', useValue: 10}],
  bootstrap: [AppComponent]
})
export class AppModule { }
