import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

@Input() errorMessage:string|null=null;

  constructor() { }

  ngOnInit(): void {
  }

}
