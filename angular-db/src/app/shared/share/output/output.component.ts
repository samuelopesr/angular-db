import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent {

  view: any

  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Luiz', idade: 20 },
    { nome: 'José', idade: 90 },
    { nome: 'Silva', idade: 13 },
  ];

  @Output() public publishData = new EventEmitter()

  public getData(event: number)
  {
    this.view = this.list[event]
    this.publishData.emit(this.view)
    console.log(this.publishData);
    
  }
}
