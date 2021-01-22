import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { firebaseConfig } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Components/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { authGuard } from './services/Auth-guard.service';
import { OurServiceComponent } from './Components/our-service/our-service.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { UserHomeComponent } from './subComponents/user-home/user-home.component';
import { EngineServiceComponent } from './subComponents/engine-service/engine-service.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'ourService',
    component: OurServiceComponent,
    children: [{ path: 'engineService', component: EngineServiceComponent }],
  },
  {
    path: 'contactUs',
    component: ContactUsComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'userHome',
    component: UserHomeComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoginComponent,
    OurServiceComponent,
    ContactUsComponent,
    HomepageComponent,
    GalleryComponent,
    UserHomeComponent,
    EngineServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig, 'PrivilageZone'),
    AngularFireDatabaseModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
