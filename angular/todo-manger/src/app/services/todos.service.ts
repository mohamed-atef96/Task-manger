import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/todos.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private http: HttpClient,
    private user: UserService,
  ) { }

    shortUrl:string = 'http://localhost:3000/todo'
    get token(){
      return {
        headers:{
          authorization:this.user.getToken()
        }}
    }


    todos:ITodo[] = []
    errors: string[] = [];


    generateError(msg: string) {
      this.errors.push(msg);
  
      setTimeout(() => {
        const errIndex = this.errors.indexOf(msg);
        this.errors.splice(errIndex, 1);
      }, 1500);
    }

    fetchTodos(){
      this.http.get<{
        todo: ITodo[]
      }>(this.shortUrl,this.token).subscribe(
          data => this.todos = data.todo,
          err => console.log(err)
        )

  }

  addTodo(data:{content:string}){
    this.http.post(`${this.shortUrl}/creatTodo`,
    data,this.token).subscribe(
      data => this.fetchTodos(),
      err=>  this.generateError('Failed To Add Todo')
    )
}

  editTodo(data:{content:string,completed:boolean}, id:string){
    this.http.put(`${this.shortUrl}/updateTodo/${id}`,
    data,this.token).subscribe(
      data => this.fetchTodos(),
      err=>  this.generateError('Failed To Update Todo')
    )
}

  deleteTodo(id:string){
    this.http.delete(`${this.shortUrl}/deleteTodo/${id}`,this.token).subscribe
    (
      data => this.fetchTodos(),
      err=> this.generateError('Failed To Delete Todo')
    )
  }
}
