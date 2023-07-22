import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModelsregisterComponent } from '../Modelsregister/Modelsregister.component';
import { CullinanService } from './cullinan.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cullinan',
  templateUrl: './cullinan.component.html',
  styleUrls: ['./cullinan.component.css']
})
export class CullinanComponent implements OnInit {
  carModel:any;
  constructor(private dialog:MatDialog,private service:ServiceService) {
    this.service.getCullinanModels().subscribe((data)=>{
      this.carModel=data;

  });
  }
  ngOnInit() {
  }
  url: string = "../../assets/cul1-b.png";
  imageChange(event: any){
      this.url = event.target.src;
  }
  image:string="../../assets/cul4-r.png"
  Change(event: any){
      this.image = event.target.src;
  }
  content:string="../../assets/cul7-y.png"
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
    this.service.content='Cullinan';
  }
}
