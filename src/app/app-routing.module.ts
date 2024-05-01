import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthrouteService } from './routeguards/authroute.service';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { StatsComponent } from './components/dashboard/stats/stats.component';
 

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthrouteService],
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'stats',
        component: StatsComponent,
      },
    ],
  },
  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'signup',
    component:LoginComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
