import { Component, OnInit } from '@angular/core';
import { ModelService } from '../Model.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-Models',
  templateUrl: './Models.component.html',
  styleUrls: ['./Models.component.css']
})
export class ModelsComponent implements OnInit {


  getProduct:any;
  constructor(private service:ModelService,private carModel:ServiceService) {
    this.service.getModel().subscribe(data=>{
      this.getProduct=data;
    });
  }

name1:string='R R Ghost';
name2:string='R RCullinan';
name3:string='R R Wraith';
name4:string='R R Phantom';
name5:string='R R Dawn';


  ngOnInit() {
    
  }


}
