import { NgModule } from "@angular/core";
import { ErrorsComponent } from "../utility/errors/errors.component";
import { LoaderComponent } from "../utility/loader/loader.component";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
    declarations:[
        LoaderComponent, 
        ErrorsComponent
    ],
    imports:[ReactiveFormsModule,],
    exports:[LoaderComponent,ErrorsComponent,  ReactiveFormsModule,]
})

export class sharedModule{

}