import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.css']
})
export class GhostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  url: string = "../../assets/g1-b.png";
  imageChange(event: any){
      this.url = event.target.src;
  }
  image:string="../../assets/g4-w.jpg"
  Change(event: any){
      this.image = event.target.src;
  }
  content:string="../../assets/g7-b.png"
  ghost(event: any){
      this.content = event.target.src;
  }
}
