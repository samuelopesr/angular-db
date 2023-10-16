import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  public condition: boolean = true
  public conditionClick: boolean = true

  public list: Array<{ nome:string, age: number }> = [{ nome: "Samuel", age: 23 },
   { nome: "José", age: 90},
   { nome: "Isabela", age: 45 }
  ]

  public nome: string = 'Samuel'

  ngOnInit(): void {

    setInterval(() => {
      if(this.condition)
      {
        this.condition = false
      }else{
        this.condition = true
      }
    }, 2000)

  }

  public onClick()
  {
    if(this.conditionClick)
      {
        this.conditionClick = false
      }else{
        this.conditionClick = true
      }
  }

  public onClickAddList()
  {
    this.list.push({ nome: 'Nay', age: 31 })
  }

  public onClickEventList(event: number)
  {
    console.log(event);
    this.list.splice(event, 1)
  }

}
