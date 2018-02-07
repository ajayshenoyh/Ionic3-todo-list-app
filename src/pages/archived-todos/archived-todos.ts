import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo'
/**
 * Generated class for the ArchivedTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archived-todos',
  templateUrl: 'archived-todos.html',
})
export class ArchivedTodosPage {
  public archivedTodo = [];
  public reorderIsEnable = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public todoProvider: TodoProvider) {
  }
  toggleReorder(){
    this.reorderIsEnable = !this.reorderIsEnable;
  }
  itemReordered($event) {
    reorderArray(this.archivedTodo, $event);
  }
  homeTodo(todoIndex){
    this.todoProvider.homeTodo(todoIndex);
  }
  ionViewDidLoad() {
    this.archivedTodo = this.todoProvider.getArchivedTodos();
  }

}
