import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private user:UserService
  ) { }

  ngOnInit(): void {
  }

  get usreLoggedIn():boolean{
    return this.user.isLogedIn();
  }
  signOut(){
    this.user.clear();
  }
}
