import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelService } from '../Model.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
getExample:any;
searchFor:any;
finalData:any;
  constructor(private service:ModelService, private route:ActivatedRoute) {
    this.service.getModel().subscribe(value=>{
    this.getExample=value;
    this.route.params.subscribe(pdata=>{
      this.searchFor=pdata['check'];
      for(let exa of this.getExample){
        if(exa.title==this.searchFor){
          this.finalData=exa;
          break;
        }
      }
    })
    })
  }

  ngOnInit() {
  }

}
