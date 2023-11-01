import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './home/todo/todo.component';
import { AddItemComponent } from './home/add-item/add-item.component';
import { HeaderComponent } from './home/header/header.component';
import { DeleteAllComponent } from './home/delete-all/delete-all.component';
import { HomeComponent } from './home/home.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    TodoComponent,
    AddItemComponent,
    HeaderComponent,
    DeleteAllComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [TodoComponent,AddItemComponent, HeaderComponent,DeleteAllComponent]

})
export class TodoListModule { }
