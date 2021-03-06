import './rxjs-imports';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {Mailer} from './mailer';
import {AdvanceMailer} from './advance-mailer';
import {MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EventBus} from './services/event-bus.service';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './article/article.component';
import {AuthGuard} from './guards/auth';
import {SaveDataGuard} from './guards/save-data';
import {NotFoundComponent} from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {InvidzService} from './services/invidz';
import { StoreTestComponent } from './store-test/store-test.component';
import {StoreModule} from '@ngrx/store';
import {rootReducer} from './reducers/index';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { ProjectsComponent } from './projects/projects.component';
import { VideosComponent } from './videos/videos.component';

const myRoutes: Routes = [
  {path: 'login', component: LoginComponent, canDeactivate: [SaveDataGuard]},
  {path: 'dashboard', redirectTo: '/xyz', pathMatch: 'full'},
  {
    path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent,
    children: [
      {path: 'confirmation', component: ConfirmationComponent},
      {path: 'article/:xyz', component: ArticleComponent},
      {path: 'store/test', component: StoreTestComponent},
    ]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfirmationComponent,
    ArticleComponent,
    NotFoundComponent,
    DashboardComponent,
    StoreTestComponent,
    ProjectsComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(myRoutes),
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({maxAge: 50})
  ],
  providers: [Mailer, {provide: 'GOOGLE_ANALYTICS_ID', useValue: 10}, EventBus, AuthGuard, SaveDataGuard, InvidzService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
