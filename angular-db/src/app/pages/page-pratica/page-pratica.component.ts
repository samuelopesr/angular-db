import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-page-pratica',
  templateUrl: './page-pratica.component.html',
  styleUrls: ['./page-pratica.component.scss']
})
export class PagePraticaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

    
    public infos: 
    Array<
    {  
     nome: string,
     sobrenome: string,
     cpf: number,
     company: string, 
     bankaccount: number,
     id: number,
     phonenumber: number,
     email: string   
    }> = 
    [
      {
      nome: undefined,
      sobrenome: undefined,
      cpf: undefined,
      company: undefined, 
      bankaccount: undefined,
      id: undefined,
      phonenumber: undefined,
      email: undefined   
      }
    ]
    
    public next: number = 0
    public test: object

    
    public nextStep()
  {
    this.next++
  }

  public backStep()
  {
    this.next--
  }

  constructor(){}

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked", this.infos);
    
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {
    this.next++
  }

}
