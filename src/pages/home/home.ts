import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';
import { TodoProvider } from "../../providers/todo/todo";
import { ArchivedTodosPage } from "../archived-todos/archived-todos"
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];
  public reorderIsEnable = false;
  constructor(public navCtrl: NavController, private alertController: AlertController, private todoProvider: TodoProvider, private toastController: ToastController) {
  this.todos = this.todoProvider.getTodos();
  }
  toggleReorder(){
    this.reorderIsEnable = !this.reorderIsEnable;
  }
  itemReordered($event) {
    reorderArray(this.todos, $event);
  }
  goToArchivePage() {
  this.navCtrl.push(ArchivedTodosPage);
}
archiveTodo(todoIndex) {
  this.todoProvider.archiveTodo(todoIndex);
}
  openTodoAlert() {
    let addTodoAlert = this.alertController.create({
      title: "Add A Todo",
      message: "Enter Your Todo",
      inputs: [
        {
          type: "text",
          name: "addTodoInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add Todo",
          handler: (inputData)=> {
            let todoText;
            todoText = inputData.addTodoInput;
            this.todoProvider.addTodo(todoText);
            addTodoAlert.onDidDismiss(()=>{
              let addTodoToast = this.toastController.create({
                message: "Todo Added",
                duration: 2000
              });
              addTodoToast.present();
            });

          }
        }
      ]
    });
    addTodoAlert.present();
  }

  updateTodoAlert(todoIndex) {
    let updateTodoAlert = this.alertController.create({
      title: "Update A Todo",
      message: "Enter Your Todo",
      inputs: [
        {
          type: "text",
          name: "updateTodoInput",
          value: this.todos[todoIndex]
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Update Todo",
          handler: (inputData)=> {
            let todoText;
            todoText = inputData.updateTodoInput;
            this.todoProvider.updateTodo(todoText, todoIndex);
            updateTodoAlert.onDidDismiss(()=>{
              let addTodoToast = this.toastController.create({
                message: "Todo Updated",
                duration: 2000
              });
              addTodoToast.present();
            });

          }
        }
      ]
    });
    updateTodoAlert.present();
  }
}
