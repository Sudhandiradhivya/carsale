import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthendGuard implements CanActivate {
  constructor(private service:LoginService, private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
    if(!this.service.isUserLoggedIn()){
      alert("You are not logged in to view the page");
      // this.route.navigate(['loginnew']);
      this.route.navigate(['loginnew'])
      return false;
    }
    return true;
  }

}
