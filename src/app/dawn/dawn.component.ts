import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dawn',
  templateUrl: './dawn.component.html',
  styleUrls: ['./dawn.component.css']
})
export class DawnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  url: string = "../../../assets/da1-b.jpg";
  imageChange(event: any){
      this.url = event.target.src;
  }
  image:string="../../assets/da4-g.png"
  Change(event: any){
      this.image = event.target.src;
  }
  content:string="../../assets/da7-b.png"
  ghost(event: any){
      this.content = event.target.src;
  }
}
