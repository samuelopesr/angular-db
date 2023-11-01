import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  public imgUrl  = "https://trello.com/1/cards/64877d7c1e4cd03df42a9ddb/attachments/654167973dda1475ab6bd28a/download/image.png"

  @Input() public getItems: string[] = []

  public checked(element: HTMLInputElement, secondElement: HTMLElement)
  {
    if(element.checked === true)
    {
      secondElement.style.textDecorationLine = "line-through"
    }if(element.checked === false){
      secondElement.style.textDecorationLine = "none"
    }
  }
}
