import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FetchService } from '../fetch.service';
import { Todo } from '../todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo:Todo;
@Output() todoDel=new EventEmitter();
  constructor(private fetch:FetchService) { }

  ngOnInit(): void {
    console.log(this.todo)
  }
  setClasses(){
    let classes={
      'is-complete':this.todo.completed,
    }
    return classes;
  }
  onToggle(todo){
    console.log(todo);
    this.todo.completed=!this.todo.completed
    this.fetch.put(todo).subscribe((res)=>{
      console.log(res);
      
    })
    
  }
  onDelete(todo){
    this.todoDel.emit(todo);

    
  }

}
