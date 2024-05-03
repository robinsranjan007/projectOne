import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { dashboardRouterModule } from './components/dashboard/dashboard-router.module';
import { authModule } from './components/login/auth.module';
 

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./components/dashboard/dashboard.module').then(mod=>mod.DashboardModule)
  },
  {
    path:'signup',
    loadChildren:()=>import('./components/login/auth.module').then(mod=>(mod.authModule))
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules}),dashboardRouterModule,authModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
