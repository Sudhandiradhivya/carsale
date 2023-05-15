import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginForms: any;
  userlogin:any;
  constructor(private route:Router) { }

  ngOnInit() {
     this.userlogin=sessionStorage.getItem('userlogin');
  }
  // loggedin(){
  //   return (this.loginForms.valid);
  // }
  // login(){
  //   this.authhService.login();
  // }
  logout(){
    sessionStorage.clear();
    this.userlogin=false;
    this.route.navigate(['Home']);
  }
}
