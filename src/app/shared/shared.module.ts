import { NgModule } from "@angular/core";
import { ErrorsComponent } from "../utility/errors/errors.component";
import { LoaderComponent } from "../utility/loader/loader.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";



@NgModule({
    declarations:[
        LoaderComponent, 
        ErrorsComponent
    ],
    imports:[ReactiveFormsModule,CommonModule],
    exports:[LoaderComponent,ErrorsComponent,  ReactiveFormsModule,CommonModule]
})

export class sharedModule{

}