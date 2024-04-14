import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService) { }

  private tokenExpireTimer:any;
  login:boolean=false;
  private usersubject!:Subscription

  ngOnInit(): void {

    this.auth.user.subscribe((val:User|null)=>{
       this.login= val? true:false
    })
  }

  ngOnDestroy()
  {
    this.usersubject.unsubscribe()
  }



signout()
{
this.auth.logout();

}





}
