import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private AuthService:AuthService
  ) { }
  ngOnInit(): void {
  }

  get errMsg(){
    return this.AuthService.errors
  }

}
