import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModelsregisterComponent } from '../Modelsregister/Modelsregister.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.css']
})
export class GhostComponent implements OnInit {

offerStatus=true;
carModel:any;

  constructor(private dialog:MatDialog,private service:ServiceService) {
    this.service.getGhostModels().subscribe((data)=>{
   this.carModel=data;
   //console.log(this.carModel)
//  this.ghostModels(this.carModel);


 });
    // this.offerStatus=localStorage.getItem('offerstatus')==='true';




   }



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
    this.service.content='Ghost';
  }
ghostModels(value:any){
   this.service.model=value.discountPrice;
   console.log(this.service.model);
}

}
