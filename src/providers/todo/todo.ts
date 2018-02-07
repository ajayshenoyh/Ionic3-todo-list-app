import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {

  private todos = [];
  private archivedTodo = [];
  constructor(public http: HttpModule) {
    console.log('Hello TodoProvider Provider');
  }
  getTodos(){
    return this.todos;
  }
  getArchivedTodos(){
    return this.archivedTodo;
  }
  addTodo(todo){
    this.todos.push(todo);
  }


  archiveTodo(todoIndex){
    let todoToBeArchived = this.todos[todoIndex];
    this.todos.splice(todoIndex, 1);
    this.archivedTodo.push(todoToBeArchived);
  }
  homeTodo(todoIndex){
    let todoToBeHomed = this.archivedTodo[todoIndex];
    this.todos.push(todoToBeHomed);
    this.archivedTodo.splice(todoIndex, 1);
  }
  updateTodo(todoText, todoIndex){
    let todoUpdateText = todoText;
    this.todos[todoIndex]=todoUpdateText;
  }
}
