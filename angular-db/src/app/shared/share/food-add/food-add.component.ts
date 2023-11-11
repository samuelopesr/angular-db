import { Component } from '@angular/core';
//services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent {

public addNum: number

public listAddItem(value: string)
{
  return this.foodListService.foodListAdd(value)
} 

public addCompanyNum(value: number)
{  
  return this.foodListService.companyAddList(value)
}

constructor(private foodListService: FoodListService){}
}
