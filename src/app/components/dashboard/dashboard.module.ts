import { NgModule } from "@angular/core";
import { CardDetailsComponent } from "./card-details/card-details.component";
import { DashboardComponent } from "./dashboard.component";
import { DetailsComponent } from "./details/details.component";
import { OverviewComponent } from "./overview/overview.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ErrorsComponent } from "src/app/utility/errors/errors.component";
import { LoaderComponent } from "src/app/utility/loader/loader.component";
import { sharedModule } from "src/app/shared/shared.module";





@NgModule({
  declarations: [
    DashboardComponent,
    CardDetailsComponent,
    DetailsComponent,
    OverviewComponent,
  ],
  imports: [
    CommonModule,
    sharedModule
    
],
  exports: [DashboardComponent,CardDetailsComponent,DetailsComponent,OverviewComponent],
})
export class DashboardModule {}