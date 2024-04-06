import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  signup:boolean=false;

  signupForm!:FormGroup

  constructor() { }

  newUser()
  {
    this.signup=!this.signup;
  }

  ngOnInit(): void {

    this.signupForm = new FormGroup({
      UserName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });

  }


submit()
{
  console.log(this.signupForm)
  console.log(this.signupForm.value)
  console.log(this.signupForm.get('password'))
  console.log(this.signupForm.get('UserName')?.value)
  console.log(this.signupForm.get('password')?.value)
}


}
