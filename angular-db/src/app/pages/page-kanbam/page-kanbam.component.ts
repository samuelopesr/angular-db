import { Component } from '@angular/core';
import { Task } from 'src/app/shared/task';

@Component({
  selector: 'app-page-kanbam',
  templateUrl: './page-kanbam.component.html',
  styleUrls: ['./page-kanbam.component.scss']
})
export class PageKanbamComponent {
  todo: Task[] = [
    {
      title: 'Buy Milk',
      description: 'Go to store and buy it'
    },
    {
      title: 'Create a kanbam app',
      description: 'Using Firebase and Angular create a kanban app'
    }
  ]
}
