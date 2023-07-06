import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl='http://localhost:3000/carmodels'
  constructor(private http:HttpClient) { }
postServiceDetails(body:any){
  return this.http.post("http://localhost:3000/serviceDetails",body)
}
postOrderDetails(body:any){
  return this.http.post("http://localhost:3000/Modelsregister",body)
}
postLoginDetails(body:any){
  return this.http.post("http://localhost:3000/Register",body)
}

getCarModels(){
  return this.http.get(this.apiUrl);
}
getGhostModels(){
   return this.http.get("http://localhost:3000/Ghostmodels");
}
content:any='';
model:any='';
}
