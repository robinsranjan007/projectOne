import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { sharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
 

const loginroutes:Routes=[
    {
        path:'',
        component:LoginComponent
      }
]



@NgModule({
    declarations:[LoginComponent],
    imports:[RouterModule.forChild(loginroutes),sharedModule],
})


export class authModule{

}