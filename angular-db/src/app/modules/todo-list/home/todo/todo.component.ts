import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, DoCheck {
  ngDoCheck(): void {}
  ngOnInit(): void {

    console.log(this.checkState);
        
    this.getItems.forEach((item, index) => 
    {
     if(this.checkState.includes(item))
     {
      console.log(this.checkState.includes(item))
      console.log(item, index);  
      const element = document.getElementById('secondElement'+ index) 
      if(element)
      {
        element.classList.add('task-done')
      }   
     }
    })
  }

  public imgUrl =
    'https://trello.com/1/cards/64877d7c1e4cd03df42a9ddb/attachments/654167973dda1475ab6bd28a/download/image.png';

  @Input() public getItems: string[] = [];

  public checkState: any = JSON.parse(localStorage.getItem('newArr'));

  public newArr: any = [];

  public verify: any;

  public opa(index: any)
  {
    console.log(index);
    
  }

  public delete(item: any) {
    const index = this.getItems.indexOf(item);

    if (index !== item) {
      this.getItems.splice(index, 1);
      localStorage.setItem('todoList', JSON.stringify(this.getItems));
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
