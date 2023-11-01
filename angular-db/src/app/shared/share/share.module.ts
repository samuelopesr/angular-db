import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyNewCompComponent } from './my-new-comp/my-new-comp.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FoodListComponent } from './food-list/food-list.component';

@NgModule({
  declarations: [
    MyNewCompComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MyNewCompComponent, InputComponent, OutputComponent, FoodListComponent]
})
export class ShareModule { }
