import './rxjs-imports';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {Mailer} from './mailer';
import {AdvanceMailer} from './advance-mailer';
import {MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EventBus} from './services/event-bus.service';
import {RouterModule, Routes} from '@angular/router';
import { ArticleComponent } from './article/article.component';

const myRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'article/:xyz', component: ArticleComponent},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfirmationComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [Mailer, {provide: 'GOOGLE_ANALYTICS_ID', useValue: 10}, EventBus],
  bootstrap: [AppComponent]
})
export class AppModule { }
