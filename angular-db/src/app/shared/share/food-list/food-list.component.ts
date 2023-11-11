import { Component, OnInit } from '@angular/core';
import { find, findIndex } from 'rxjs';

//já posso utilzar o meu service
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  constructor(private foodListService: FoodListService) {}

  ngOnInit() {
    this.foodList = this.foodListService.foodList();

    this.companyList = this.foodListService.companyList();

    this.companyList.forEach((el: any) => {
      this.el = el;

      this.porc = el.porcents;
      console.log(Object.assign(el.porcents, this.porc));

      this.newl.push(el);
    });

    this.foodListService.emitEvent.subscribe({
      next: (res: string) => alert(`Você add um(a) => ${res}`),

      err: (err: Error) => alert(`Ocorreu um erro => ${err}`),
    });

    this.foodListService.anotherEmit.subscribe({
      next: (res: any) => {
        alert(`Adicionou um número a empresa ${res}`);

        this.porc.push(res);
        Object.assign(this.el.porcents, this.porc);
        console.log(this.companyList);
      },

      err: (err: Error) => alert(`Deu erro ${err.message}`),
    });
  }

  public foodList: Array<string>;

  public companyList: Array<Object | number | string>;

  newl = [];
  porc = [];
  el: any;
}
