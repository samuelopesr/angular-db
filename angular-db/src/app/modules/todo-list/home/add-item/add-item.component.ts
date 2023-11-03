import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent {
  @Output() public item = new EventEmitter()

  public todoItem: string

  public method(item: string) {
    this.item.emit(item)
    console.log(this.item);
        
    this.todoItem = ""
  }
}
