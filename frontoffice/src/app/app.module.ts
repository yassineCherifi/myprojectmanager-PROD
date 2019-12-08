import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/user/register/register.component';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/user/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ListprojetsComponent } from './components/dashboard/listprojets/listprojets.component';
import { DetailprojetComponent } from './components/dashboard/detailprojet/detailprojet.component';
import { ProjetService } from './services/projet.service';
import { IssuesService } from './services/issues.service';
import { IssueComponent } from './components/dashboard/detailprojet/issue/issue.component';
import { TaskComponent } from './components/dashboard/detailprojet/task/task.component';
import { SprintComponent } from './components/dashboard/detailprojet/sprint/sprint.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsprintComponent } from './components/dashboard/detailprojet/detailsprint/detailsprint.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TestComponent } from './components/dashboard/detailprojet/test/test.component';
import { UserdetailComponent } from './components/dashboard/userdetail/userdetail.component';
import { ReleaseComponent } from './components/dashboard/detailprojet/release/release.component';
import { DocumentationComponent } from './components/dashboard/detailprojet/documentation/documentation.component';
import { ContributorComponent } from './components/dashboard/detailprojet/contributor/contributor.component';
import { ContributorService } from './services/contributor.service';
import { AcceptComponent } from './components/accept/accept.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    ListprojetsComponent,
    DetailprojetComponent,
    IssueComponent,
    TaskComponent,
    SprintComponent,
    DetailsprintComponent,
    TestComponent,
    UserdetailComponent,
    ReleaseComponent,
    DocumentationComponent,
    ContributorComponent,
    AcceptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [UserService, ProjetService, IssuesService, ContributorService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
