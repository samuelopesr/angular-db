import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunication-comp',
  templateUrl: './comunication-comp.component.html',
  styleUrls: ['./comunication-comp.component.scss'],
})
export class ComunicationCompComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  public addValue: number = 60;
  public add() {
    this.addValue++;
  }

  public getDados: { nome: string; idade: number } | undefined;

  public setData(event: { nome: string; idade: number }) {
    this.getDados = event;
  }
}
