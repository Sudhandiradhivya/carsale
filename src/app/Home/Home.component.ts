import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  offerStatus=false;
  models: any='';

  constructor(private service:ServiceService) {
    this.service.getCarModels().subscribe(data=>{
          this.models=data;
    });
    this.offerStatus = localStorage.getItem('offerStatus') === 'true';
   }

  ngOnInit() {
  }
  popup:boolean=true;
  closepop(){
    clearInterval(this.interval);
    this.popup=false;
  }

  interval:any=setInterval(()=>{
    this.closepop();
  },5000)

  offer(){
    location.pathname = ('/Models');
  }



}
