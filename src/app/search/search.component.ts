import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name:string="";
  searchValue:string='';
  onchange(event:any){
    this.name=event.target.value;
  }


 @Output() SearchValueChanged:EventEmitter<string>=new EventEmitter<string>();

 onSearchValueChanged(){
    this.SearchValueChanged.emit(this.searchValue);
 }



}
