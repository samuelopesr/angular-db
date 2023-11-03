import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.getStorage = localStorage.getItem('todoList');
    console.log(this.getStorage);
    if (localStorage.getItem('todoList') !== null) {
      this.todoList = JSON.parse(this.getStorage);
    }
  }
  public todoList = [];
  public arrRef: [] = []
  public getStorage: any;

  setData(newItem: string) {
    this.todoList.push(newItem);

    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
}
