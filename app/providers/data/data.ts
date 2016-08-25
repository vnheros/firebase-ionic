import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
import {ReplaySubject} from 'rxjs/ReplaySubject';

declare var firebase: any;

@Injectable()
export class Data {
  private _todos$: any;
  private _db: any;
  private _todosRef: any;

  //constructor(private http: Http) {
    constructor() {
    this._db = firebase.database().ref('/'); // Get a firebase reference to the root
    this._todosRef = firebase.database().ref('todos'); // Get a firebase reference to the todos
    this._todosRef.on('child_added', this.handleData, this);
    this._todos$ = new ReplaySubject();
  }

  get todos() {
    return this._todos$;
  }
  
  handleData(snap) {
    try {
      // Tell our observer we have new data
      this._todos$.next(snap.val());
    }
    catch (error) {
      console.log('catching', error);
    }
  }  

  save(todo)
  {
    return this._todosRef.push(todo).key;
  }

}

