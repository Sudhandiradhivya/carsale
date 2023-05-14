import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginForms: any;

  constructor() { }

  ngOnInit() {
  }
  // loggedin(){
  //   return (this.loginForms.valid);
  // }
  // login(){
  //   this.authhService.login();
  // }
}
