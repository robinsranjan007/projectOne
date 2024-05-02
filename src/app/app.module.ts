import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthInterceptorService } from './shared/auth-intercept.service';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { StatsComponent } from './components/dashboard/stats/stats.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { authModule } from './components/login/auth.module';
 
 

@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,
    HomeComponent,
    StatsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    authModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
