import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

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

}
