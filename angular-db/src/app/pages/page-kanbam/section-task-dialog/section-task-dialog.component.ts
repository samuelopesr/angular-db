import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Task } from 'src/app/shared/task';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-section-task-dialog',
  templateUrl: './section-task-dialog.component.html',
  styleUrls: ['./section-task-dialog.component.scss']
})
export class SectionTaskDialogComponent {

  private backupTask: Partial<Task> = { ...this.data.task };

  constructor(
    public dialogoRef: MatDialogRef<SectionTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData){}

    cancel(): void {
      this.data.task.title = this.backupTask.title
      this.data.task.description = this.backupTask.description
      this.dialogoRef.close()
    }
}

export interface TaskDialogData {
  task: Partial<Task>
  enableDelete: boolean
}

export interface TaskDialogResult {
  task: Task
  delete?: boolean
}
