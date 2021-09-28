import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/user.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient,
    private userService:UserService,
    private router:Router
  ) { }

  errors: string[] = [];


  generateError(msg: string) {
    this.errors.push(msg);

    setTimeout(() => {
      const errIndex = this.errors.indexOf(msg);
      this.errors.splice(errIndex, 1);
    }, 1500);
  }

  signIn(data: {email:string,password:string}){
    this.http.post<{
      userData:IUser,
      token:string
    }>('http://localhost:3000/auth/signIn',data).subscribe
    ( data=>{this.userService.setUser(data.userData,data.token)
      this.router.navigateByUrl('/home')
    },
    err=>this.generateError('incorrect email or password'))
  }
  signUp(data: {name:string,email:string,password:string}){
    this.http.post('http://localhost:3000/auth/signUp',data).subscribe(
      data=>this.router.navigateByUrl('auth/signIn'),
      err=>this.generateError('Failed to create account')
    )
  }
}
