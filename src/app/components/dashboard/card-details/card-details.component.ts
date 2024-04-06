import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { formsdetails } from 'src/app/shared/formdata.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  constructor() { }

  @Output() closing =new EventEmitter<boolean>()
  @Input() selectedDetails:formsdetails|null = null

  ngOnInit(): void {
  }


  closeDetails()
  {
    this.closing.emit(false)
  }
}
