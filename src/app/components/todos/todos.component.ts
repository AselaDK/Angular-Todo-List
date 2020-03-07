import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //todos is an array of objects
  todos:Todo[];

  constructor( private todoService:TodoService ) { }

  ngOnInit(): void {
    //add values to todos
    // has to subsvribe bcz asynchronize calls
    this.todoService.getTodos().subscribe(todo =>{
      this.todos = todo;
    });
  }

  deleteTodo(todo: Todo) {
    // delete from ui
    this.todos = this.todos.filter(t => t.id !== todo.id);

    // delete from server
    this.todoService.deleteTodo(todo).subscribe();
  }

}
