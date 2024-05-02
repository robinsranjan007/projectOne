import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { dashboardRouterModule } from './components/dashboard/dashboard-router.module';
import { authModule } from './components/login/auth.module';
 

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),dashboardRouterModule,authModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
