import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/shared/task';


@Component({
  selector: 'app-section-task',
  templateUrl: './section-task.component.html',
  styleUrls: ['./section-task.component.scss']
})
export class SectionTaskComponent {
  @Input() task: Task | null = null
  @Output() edit = new EventEmitter<Task>();
}
