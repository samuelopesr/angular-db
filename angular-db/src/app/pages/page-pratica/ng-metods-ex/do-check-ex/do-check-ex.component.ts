import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-do-check-ex',
  templateUrl: './do-check-ex.component.html',
  styleUrls: ['./do-check-ex.component.scss']
})
export class DoCheckExComponent implements DoCheck, OnInit {

  public message: string
  public item: any
  public items:Array<[]> = []
  public lastItemsLen: number
  
  ngDoCheck(): void {
      if(this.items.length !== this.lastItemsLen)
      {
         this.message = `${this.lastItemsLen} was last array items lenght, now ${this.items.length} is actual lenght`

         this.lastItemsLen = this.items.length
      }

      if(this.value !== this.lastValue)
      {
        this.messageVal = `${this.lastValue} was last array items lenght, now ${this.value} is actual lenght`
        this.lastValue = this.value
      }
  }

  
  public addItem()
  {
    this.items.push(this.item)
    console.log("items length", this.
    items.length + 1);
    console.log(this.items);
    
    this.item = ""
  }
  

  public newValue: string
  public value: string
  public lastValue: string
  public messageVal: string

  public addValue()
  {
    this.value = this.newValue
  }

  ngOnInit(): void {
    this.lastValue = this.value
  }
  
  
  
}
