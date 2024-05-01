import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthInterceptorService } from './shared/auth-intercept.service';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CardDetailsComponent } from './components/dashboard/card-details/card-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/dashboard/details/details.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { StatsComponent } from './components/dashboard/stats/stats.component';
import { ErrorsComponent } from './utility/errors/errors.component';
import { LoaderComponent } from './utility/loader/loader.component';
import { ReactiveFormsModule } from '@angular/forms';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    CardDetailsComponent,
    DetailsComponent,
    OverviewComponent,
    StatsComponent,
    LoaderComponent, 
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
