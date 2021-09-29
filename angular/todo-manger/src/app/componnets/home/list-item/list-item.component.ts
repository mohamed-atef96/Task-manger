import { ConstantPool } from '@angular/compiler';
import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { defaultTodo, ITodo } from 'src/app/interfaces/todos.interface';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(
    private todosService:TodosService
  ) { }
  @Input() todo:ITodo = defaultTodo
  @Output() newItemEvent = new EventEmitter<{content: string, id: string}>();
  ngOnInit(): void {
  }

  delete(){
    this.todosService.deleteTodo( this.todo._id)
  }


  sendContent(todo:{content:string,id:string}) {
    this.newItemEvent.emit(todo);
  }
  complete(){
    this.todosService.editTodo({content:this.todo.content,completed:!this.todo.completed},this.todo._id)
  }
}
