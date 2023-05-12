import { Component, OnInit } from '@angular/core';
import { AuthhService } from '../authh.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginForms: any;

  constructor(private authhService:AuthhService) { }

  ngOnInit() {
  }
  loggedin(){
    return (this.loginForms.valid);
  }
  login(){
    this.authhService.login();
  }
}
