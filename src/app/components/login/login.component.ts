import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signup: boolean = false;
  isloading: boolean = false;
  errorMessage:string|null = null;

  signupForm!: FormGroup;

  constructor(private authentication: AuthService,private router:Router) {}

  newUser() {
    this.signup = !this.signup;
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  
  submit() {
    if (this.signup) {
      this.isloading=true;
      const email = this.signupForm.get('email')?.value;
      const password = this.signupForm.get('password')?.value;
      this.authentication.signUp(email, password).subscribe({
        next: (val) => {
          this.isloading=false;
          this.router.navigate(['dashboard'])
        },
        error: (errMsg) => {
          this.isloading=false;
          this.errorMessage=errMsg;
        },
      });
    }
    else
    {
      console.log('i am being called')
      this.isloading=true;
      const email = this.signupForm.get('email')?.value;
      const password = this.signupForm.get('password')?.value;
      this.authentication.login(email,password).subscribe({
        next:(val)=>{ 
          this.isloading=false;
          alert('you have been succesfully logged in')
          this.router.navigate(['dashboard'])
        },
        error:(errMsg)=>{
          
          this.isloading=false;
          this.errorMessage=errMsg;
         setTimeout(()=>{
          this.errorMessage=null;
         },2000)
    
        }
      })
    }
    this.signupForm.reset();
  }

}
