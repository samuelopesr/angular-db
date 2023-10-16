import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributes-directives',
  templateUrl: './atributes-directives.component.html',
  styleUrls: ['./atributes-directives.component.scss']
})
export class AtributesDirectivesComponent implements OnInit {
  public valor: boolean = true

  public height: string = "200px"
  public width: string = "250px"
  public back: string = "aquamarine"

  public nome: string = ""
  public list: Array<{ nome: string }> = []
  public salvar()
  {
    this.list.push({nome: this.nome})
    this.nome = ""
  }

  public date: Date = new Date()

  ngOnInit(): void {
    setInterval(() => {
      if(this.valor)
      {
        this.valor = false
      } else {
        this.valor = true
      }

      if(this.height === "200px" && this.width === "250px" && this.back === "aquamarine")
      { 
        this.back = "orange"
        this.width = "300px"
        this.height = "180px"
      }else{
        this.back = "aquamarine"
        this.width = "250px"
        this.height = "200px"
      }

    }, 2000)
  }


}
