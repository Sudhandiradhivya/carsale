import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModelsregisterComponent } from '../Modelsregister/Modelsregister.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dawn',
  templateUrl: './dawn.component.html',
  styleUrls: ['./dawn.component.css']
})
export class DawnComponent implements OnInit {
  carModel:any;
  constructor(private dialog:MatDialog,private service:ServiceService) {
    this.service.getDawnModels().subscribe((data)=>{
      this.carModel=data;
   });
  }

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
    this.service.content='Dawn';
  }
}
