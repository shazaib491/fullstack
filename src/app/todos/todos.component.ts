import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Todo } from '../todo';
import {FetchService} from './../fetch.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:any;
title:any;
  constructor(private fetch:FetchService) { }

  ngOnInit(): void {
    this.fetch.get().subscribe((res)=>{
      console.log(res);
      this.todos=res 
    })
    
    
  }
  todoss(param){
    console.log(param);
    this.todos=this.todos.filter(t=>t._id!==param._id)
    this.fetch.delete(param._id).subscribe((res)=>{
      console.log(res)
    })

  }
  submit(){
    let todo={
      title:this.title,
      isCompleted:false
    }
    this.fetch.post(todo).subscribe((res)=>{
      this.todos.push(res)
      console.log(this.todos);
      
      
    })
  }
}
