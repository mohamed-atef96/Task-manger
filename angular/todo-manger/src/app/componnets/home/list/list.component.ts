import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private todosService:TodosService
  ) { }

    todoContent:string=''
    todoId:string = ''
  ngOnInit(): void {
    this.todosService.fetchTodos()
  }
  get todos(){
    return this.todosService.todos;
  }
  getContent(todo:{content:string,id:string}) {
   this.todoContent = todo.content,
   this.todoId = todo.id
  }
  edit(){
    this.todosService.editTodo({content:this.todoContent,completed:false},this.todoId)
  }
}
