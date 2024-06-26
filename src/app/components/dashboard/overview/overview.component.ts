import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { formsdetails } from 'src/app/shared/formdata.service';
import { map } from 'rxjs';
import { HttpservicesService } from 'src/app/shared/httpservices.service';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private services: HttpservicesService) {}
  updateFormName: boolean = false;
  hideMessage: boolean = false;
  formId: string | undefined = '';
  isLoading: boolean = false;
  errorMessage: string | null = null;
  closingdetailtab:boolean=false;
  selectedDetails:formsdetails|null=null


  allposts: formsdetails[] = [];
  dataToUpdate!: formsdetails | undefined;

  ngOnInit(): void {
    this.getAllPosts();
    this.services.errorsubject.subscribe({
      next: (val: HttpErrorResponse) => {
        this.setErrorMessage(val);
      },
    });
  }

  openPostMessage() {
    this.hideMessage = true;
    this.updateFormName = true;
  }

  closeform(val: boolean) {
    this.hideMessage = val;
  }

  postformdata(val: formsdetails) {
    if (this.updateFormName) {
      this.services.postData(val);
    } else {
      this.services.updateData(val, this.formId);
    }
  }
// formid and update thing why not direct formid from val.id

  getAllPosts() {
    this.isLoading = true;
    this.services.getAlldata().subscribe({
      next: (val) => {
        this.allposts = val;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.setErrorMessage(err);
        setTimeout(()=>{
          this.errorMessage=null;
         },2000)
      },
    });
  }

  private setErrorMessage(err: HttpErrorResponse) {
    
    if (err.error.error === 'Permission denied') {
      this.errorMessage =
        'you do not have the permission to perform this action';
    }
    else if(err.message=="Http failure response for https://myproject-c093d-default-rtdb.fireseio.com/cards.json: 0 Unknown Error")
    {
      this.errorMessage="No such Api exist"
    }
    else
    {
      this.errorMessage="something went wrong please check your internet connection you moron"
    }
  }

  deletePostMessage(id: string | undefined) {
    this.services.deleteData(id);
    
  }

  deletaAll() {
    this.services.deeteAllData();

  }

  updateMessage(id: string | undefined) {
    this.formId = id;
    this.hideMessage = true;
    this.updateFormName = false;
    this.dataToUpdate = this.allposts.find((val) => val.id === id);
  }

  fetchAll() {
    this.getAllPosts();
  }

  closeingdetails(val:boolean)
  {
  this.closingdetailtab=val;
  }


  seeDetails(id:string|undefined)
  {
    this.closingdetailtab=true;
    this.services.getDetails(id).subscribe(
      {
        next:(data:formsdetails)=>{
            this.selectedDetails=data
        }
      }
    )
  }

}
