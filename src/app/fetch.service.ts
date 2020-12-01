import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient) { }
ROOT_URL="http://localhost:8000/api/";

  
  get(){
    return this.http.get(`${this.ROOT_URL}/display`);
  }
  post(todo){
    return this.http.post(`${this.ROOT_URL}/insert`,todo)
  }
  put(todo){
    return this.http.put(`${this.ROOT_URL}/updateTodo/${todo._id}`,todo)
  }
  delete(todo){
    return this.http.delete(`${this.ROOT_URL}/deleteTodo/${todo}`)

  }

}
