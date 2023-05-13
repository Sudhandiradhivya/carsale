import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModellingService {

  constructor() { }
  get isUserLoggedIn(){
    return true;
  }
  get isUserRole(){
    return true;
  }
}
