import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';



export interface IDeactivateComponent{
  canExit:()=>Observable<boolean> | Promise<boolean> | boolean;
}
export class DeactivateGuard implements CanDeactivate<IDeactivateComponent> {
  canDeactivate(
    component:IDeactivateComponent,
    currentroute: ActivatedRouteSnapshot,
    currrentState:RouterStateSnapshot,
     nextState: RouterStateSnapshot)
  {
    return component.canExit();
  }

}
