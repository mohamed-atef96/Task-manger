import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  setUser(userData:IUser , token:string){
    window.localStorage.setItem('user',JSON.stringify(userData));
    window.localStorage.setItem('token',`Berear ${token}`);
  }
  getUser(){
    return localStorage.getItem('user')
  }

  getToken():string{
    return localStorage.getItem('token')!
  }
 
  isLogedIn(){
    return !! this.getUser()
  }
  clear(){
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('token')
  }
}
