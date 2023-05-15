import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModellingService } from '../modelling.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginForms: any;
  userlogin:any;
  constructor(private route:Router,private modellingService:ModellingService) { }

  ngOnInit() {
     this.userlogin=sessionStorage.getItem('userlogin');
  }

  logout(){
    sessionStorage.clear();
    this.userlogin=false;
    this.route.navigate(['Home']);
  }
}
