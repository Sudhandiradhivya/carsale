import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModelsregisterComponent } from '../Modelsregister/Modelsregister.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-wraith',
  templateUrl: './wraith.component.html',
  styleUrls: ['./wraith.component.css']
})
export class WraithComponent implements OnInit {

carModel:any;
  constructor(private dialog:MatDialog,private service:ServiceService) {
    this.service.getWraithModels().subscribe((data)=>{
      this.carModel=data;
   });
  }

  ngOnInit() {
  }
  url: string = "../../assets/wr1-g.jpg";
  imageChange(event: any){
      this.url = event.target.src;
  }
  image:string="../../assets/wr4-b.jpg"
  Change(event: any){
      this.image = event.target.src;
  }
  content:string="../../assets/wr7-y.webp"
  ghost(event: any){
      this.content = event.target.src;
  }
  openDialog(details:any) {
    console.log(details);
    this.service.content=details.name;
    this.service.model=details.discountPrice?details.discountPrice:details.price;
    this.dialog.open(ModelsregisterComponent, {
      width:'35%',
      height:'65%'
    });
this.cullinan();
  }
  cullinan(){
    this.service.content='Wraith';
  }
}
