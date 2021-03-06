import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email:string= ''
  password:string = ''
  constructor(
    private authservice : AuthService
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.authservice.signIn({
      email:this.email,
      password:this.password
    })
  }

}
