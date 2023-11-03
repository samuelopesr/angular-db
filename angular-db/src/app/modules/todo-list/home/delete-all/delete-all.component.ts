import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delete-all',
  templateUrl: './delete-all.component.html',
  styleUrls: ['./delete-all.component.scss']
})
export class DeleteAllComponent {
  @Input() public getList: string[] = []

  delete()
  {
    this.getList.splice(0, this.getList.length)

  localStorage.clear()    
  }
}
