import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private http:HttpClient) { }
getlogged:any="";
acceptdetails:any="";
  ngOnInit() {
    const logged=sessionStorage.getItem('user');
    if(logged){
    this.getlogged=JSON.parse(logged);

    }
    this.http.get<any>("http://localhost:3000/OrderAcceptedDetails").subscribe((data)=>{
const values=data.find((b:any))
    })
    this.http.get<any>("http://localhost:3000/OrderAcceptedDetails/"+this.getlogged.id).subscribe((data)=>{
this.acceptdetails=data;
    })

  }

}
