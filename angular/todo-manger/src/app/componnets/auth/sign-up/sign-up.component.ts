import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AuthComponent } from '../auth.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  name:string = '';
  email:string = '';
  password:string = '';
  constructor(
    private authservice:AuthService
  ) { }

  ngOnInit(): void {
  }
  submit(){
    this.authservice.signUp({
      name:this.name,
      email:this.email,
      password:this.password
    })
  }
}
