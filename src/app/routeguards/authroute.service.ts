import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable,map ,take} from 'rxjs';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthrouteService  implements CanActivate{

  constructor(private authservice:AuthService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
return this.authservice.user.pipe(take(1),
  map((val)=>{
  if(val)
    {
      return true;
    }
    else
    {
return this.router.createUrlTree(['/signup'])
    }
  })
)


  }
}
