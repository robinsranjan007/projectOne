import { NgModule } from "@angular/core";
import { CardDetailsComponent } from "./card-details/card-details.component";
import { DashboardComponent } from "./dashboard.component";
import { DetailsComponent } from "./details/details.component";
import { OverviewComponent } from "./overview/overview.component";
import { CommonModule } from "@angular/common";
import { sharedModule } from "src/app/shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
 

@NgModule({
  declarations: [
    DashboardComponent,
    CardDetailsComponent,
    DetailsComponent,
    OverviewComponent,
  ],
  imports: [
    CommonModule,
    sharedModule,
    RouterModule
    
],
  exports: [DashboardComponent,CardDetailsComponent,DetailsComponent,OverviewComponent,sharedModule],
})
export class DashboardModule {}