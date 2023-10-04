import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticationService } from 'src/app/autentication.service';
import { Contato } from 'src/app/shared/contato';
import { ContatoDataService } from 'src/app/shared/contato-data.service';
import { ContatoService } from 'src/app/shared/contato.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  contatos: Observable<any>

  constructor(private contatoService: ContatoService, private contatoDataService: ContatoDataService){
  }

  ngOnInit(){
    this.contatos = this.contatoService.getAll()
  }

  delete(key: string){
    this.contatoService.database.list('contato').remove(key)
  }

  edit(contato: Contato, key: string){
  this.contatoDataService.changeContato(contato, key)
  }

}
