import { Component, OnInit } from '@angular/core';

//já posso utilzar o meu service
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

 constructor(private foodListService: FoodListService){}

  ngOnInit() {
    this.foodList = this.foodListService.foodList()   
  }

 public foodList: Array<string>;


}
