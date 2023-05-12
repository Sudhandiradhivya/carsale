export class AuthhService{
  loggedIn:boolean=false;
  login(){
    this.loggedIn=true;
  }
  logout(){
    this.loggedIn=false;
  }
  IsAuthendicated(){
    return this.loggedIn;
  }
}
