import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formsdetails } from 'src/app/shared/formdata.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

@Output() closeform=new EventEmitter<boolean>();
@Output() formdata:EventEmitter<formsdetails>= new EventEmitter<formsdetails>();
@Input()  changeFormat:boolean=true;
@Input() dataToUpdate:formsdetails|undefined

myform!:FormGroup


  ngOnInit(): void {
    this.createform();
    this.changingdata();
  }



  closeMessageForm()
  {
    this.closeform.emit(false);
  }


  // reactive form created here
  createform()
  {
    this.myform = new FormGroup({
      firstName:new FormControl(null,[Validators.required,Validators.maxLength(10)]),
      lastName:new FormControl(null,[Validators.required,Validators.maxLength(10)]),
      title:new FormControl(null,[Validators.required,Validators.maxLength(10)]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      country:new FormControl(null,[Validators.required]),
      character:new FormControl(null,[Validators.required]),
      message:new FormControl(null,[Validators.required,Validators.maxLength(100)]),
    })
  }


  submit()
  {
    const fdata=this.myform.value as formsdetails
    this.formdata.emit(fdata)
    this.closeMessageForm()
  }
 

   changingdata() {
      if (this.changeFormat) {
     
        this.myform.reset();
      } else if (this.dataToUpdate) {
         
        this.myform.patchValue({
          firstName: this.dataToUpdate.firstName,
          lastName: this.dataToUpdate.lastName,
          title: this.dataToUpdate.title,
          email: this.dataToUpdate.email,
          country: this.dataToUpdate.country,
          character: this.dataToUpdate.character,
          message: this.dataToUpdate.message
        });
      }
  }
  
  }


