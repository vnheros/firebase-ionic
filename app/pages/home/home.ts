import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Data} from '../../providers/data/data';
import {NewTodoPage} from '../new-todo/new-todo';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  public todos: any[] = [];

  constructor(private navCtrl: NavController, public _data: Data) {
    let that = this;
    this._data.todos.subscribe(
      (data) => {that.todos.push(data);},
      (err) => {console.error(err);}
    );
  }

  newTodo() {
    this.navCtrl.push(NewTodoPage);
  }
}
