import { createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthhService } from "./authh.service";

@Injectable()
export class OrderGuardService implements CanActivate{
  constructor(private auththService:AuthhService,private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
      if(!this.auththService.IsAuthendicated()){
        alert("you are not logged in to view the page");
        this.router.navigate(['/loginnew']);
        return  false;

      }
      else{

        return true;
      }
   }
}
