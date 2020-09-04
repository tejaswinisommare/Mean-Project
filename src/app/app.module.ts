import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { from } from 'rxjs';
import { HomepageComponent } from './homepage/homepage.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdmissionComponent } from './admission/admission.component';
import { GalleryComponent } from './gallery/gallery.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegisterpageComponent,
    ErrorpageComponent,
    HomepageComponent,
    ForgetpassComponent,
    WelcomeComponent,
    LogoutModalComponent,
    ContactusComponent,
    AdmissionComponent,
    GalleryComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
