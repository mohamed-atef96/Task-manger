import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private todosService:TodosService
  ) { }
    content:string = ''
    ngOnInit(): void {
  }
  add(){
    this.todosService.addTodo({content:this.content});
    this.content = ''
  }
  
}
