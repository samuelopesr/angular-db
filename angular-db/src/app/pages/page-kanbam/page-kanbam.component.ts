import { Component } from '@angular/core';
import { Task } from 'src/app/shared/task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { SectionTaskDialogComponent, TaskDialogResult } from './section-task-dialog/section-task-dialog.component';
import { FirestoreModule } from '@angular/fire/firestore';


@Component({
  selector: 'app-page-kanbam',
  templateUrl: './page-kanbam.component.html',
  styleUrls: ['./page-kanbam.component.scss']
})
export class PageKanbamComponent {

  todoList: string
  inProgressList: string
  doneList: string

  todo: Task[] = []
  inProgress: Task[] = []
  done: Task[] = []

  editTask(list: 'done' | 'todo' | 'inProgress', task: Task): void {
    const dialogRef = this.dialog.open(SectionTaskDialogComponent, {
      width: '270px',
      data: {
        task,
        enableDelete: true
      }
    });
    dialogRef.afterClosed().subscribe((result:TaskDialogResult|undefined) => {
      if (!result){
        return
      }

      const dataList = this[list]
      const taskIndex = dataList.indexOf(task)
      if (result.delete) {
          dataList.splice(taskIndex, 1)
      } else {
        dataList[taskIndex] = task
      }
    })
  }

  drop(event: CdkDragDrop<Task[]|null>): void {
    if(event.previousContainer === event.container)
    {
      return
    }
    if (!event.container.data || !event.previousContainer.data)
    {
      return
    }

    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    )

 }


 

 constructor(private dialog: MatDialog, private store: FirestoreModule){}

 newTask(): void {
  const dialogRef = this.dialog.open(SectionTaskDialogComponent, {
    width: '270px',
    data: {
      task: {},
    },
   });
   dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult|undefined) => {
        if(!result){
          return
        }
        this.todo.push(result.task)
      })
 }

}
