import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/dashboard/details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CardDetailsComponent } from './components/dashboard/card-details/card-details.component'
import { AuthInterceptorService } from './shared/auth-intercept.service';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './utility/loader/loader.component';
import { ErrorsComponent } from './utility/errors/errors.component';
 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailsComponent,
    CardDetailsComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    LoaderComponent,
    ErrorsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
