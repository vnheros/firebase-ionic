import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Data } from '../../providers/data/data';

class Todo {
  public title: string;
  public completed: boolean;
  constructor() {
    this.title = '';
    this.completed = false;
  } 
}

@Component({
  templateUrl: 'build/pages/new-todo/new-todo.html',
})

export class NewTodoPage {
  todo: Todo;

  constructor(private navCtrl: NavController, private toastCtrl: ToastController, public _data: Data) {
    this.todo = new Todo();
  }

  save() {
    var key = this._data.save(this.todo);
    if (key) {
      let toast = this.toastCtrl.create({
        message: 'Todo Saved',
        duration: 500
      });

      toast.onDidDismiss(() => {
        this.navCtrl.pop();
        console.log('Dismissed toast');
      });

      toast.present();
    } 
  }

}
