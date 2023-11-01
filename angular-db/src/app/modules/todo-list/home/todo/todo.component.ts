import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnChanges, DoCheck {
  ngDoCheck(): void {
    localStorage.getItem("item")
  }

  ngOnChanges(changes: SimpleChanges)
  {   
    console.log(changes);
  }
  
  public imgUrl  = "https://trello.com/1/cards/64877d7c1e4cd03df42a9ddb/attachments/654167973dda1475ab6bd28a/download/image.png"

  @Input() public getItems: string[] = []


  public delete(item: any)
  {
    const index = this.getItems.indexOf(item)

    if(index !== item)
    {
      this.getItems.splice(index,1);
    }
  }

  public checked(element: HTMLInputElement, secondElement: HTMLElement, index: any)
  {
    if(element.checked)
    {
      secondElement.style.textDecorationLine = "line-through"
      this.getItems.push(this.getItems.splice(index,1)[0])
    }else{
      secondElement.style.textDecorationLine = "none"
    }
  }
}
