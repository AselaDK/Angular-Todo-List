import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // Input is need when we this component is accessed by another component in html
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  // set dynamic css class to line through of completed todos
  setClasses() {
    let classes = {
      todo: true, // .todo css class is always true
      'is-complete': this.todo.completed // .is-complete css class works if todo.completed is true
      // if there's a - in css class, it shuld be in ''s.
    }
    return classes;
  }

}
