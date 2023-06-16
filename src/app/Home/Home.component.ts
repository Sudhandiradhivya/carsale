import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

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
