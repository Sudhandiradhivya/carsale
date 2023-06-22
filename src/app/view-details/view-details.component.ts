import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PayComponent } from '../pay/pay.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
values: any;


  constructor(private http:HttpClient,private dialog:MatDialog) { }
getlogged:any="";
acceptdetails:any="";
payment:any="";
getServices:any;
  ngOnInit() {
    const logged=sessionStorage.getItem('user');
    if(logged){
    this.getlogged=JSON.parse(logged);

    }



this.http.get<any>("http://localhost:3000/ServiceAcceptDetails").subscribe((services)=>{
   const service=services.find((s:any)=>{
   if(this.getlogged.email===s.email){
    this.getServices=s;
   }
   })
   if(service){
    this.getServices=service;
   }
   console.log(this.getServices);
})


    this.http.get<any>("http://localhost:3000/OrderAcceptedDetails").subscribe((data)=>{
const values=data.find((b:any)=>
{
  return this.getlogged.email===b.email;
})

if(values){
this.getId(values);
}
})
this.http.get<any>("http://localhost:3000/GenanerateBills").subscribe((bill)=>{
  const getamount=bill.find((c:any)=>{
    return this.getlogged.email===c.email;
  });
  if(getamount){
       this.payment=getamount;
  }
})

  }
getId(values:any){
  this.http.get<any>("http://localhost:3000/OrderAcceptedDetails/"+values.id).subscribe((data)=>{
    this.acceptdetails=data;
        });
}
openDialog() {
  this.dialog.open(PayComponent, {
    width:'32%',
    height:'65%'
  });
}
}
