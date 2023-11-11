import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  
  public emitEvent = new EventEmitter()
  public anotherEmit = new EventEmitter()
  private list: Array<string> = [
    "x-bacon",
    "feijão",
    "Ovo"
  ]

  private values: Array<Object | number |string> = [
    {
      titulo: "Pocentagem de crescimento da empresa",
      porcents: [
        10,
        20,
        30,
        40, 
        50,
        70,
        90,
        100
      ],
      final: "Taxa finalizada"
    }
  ]

  constructor() { }

  public foodList()
  {
    return this.list;
  }

  public companyList()
  {
    return this.values
  }

  public companyAddList(value: number)
  { 
    this.anotherEmit.emit(value)
  }

  public foodListAdd(value: string)
  {
    this.foodListAlert(value)
    return this.list.push(value)
  }

  public foodListAlert(value: string)
  {
    return this.emitEvent.emit(value)
  }
}
