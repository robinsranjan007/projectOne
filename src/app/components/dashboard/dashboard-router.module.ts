import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthrouteService } from "src/app/routeguards/authroute.service";
import { OverviewComponent } from "./overview/overview.component";
import { StatsComponent } from "./stats/stats.component";


const routes:Routes=[
    {
      path: 'dashboard',
      canActivate: [AuthrouteService],
      children: [
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
  ]


@NgModule(
    {
        imports:[RouterModule.forChild(routes)],
        exports:[RouterModule],

    }
)
export class dashboardRouterModule{
    
}