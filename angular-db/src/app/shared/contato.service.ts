import { Injectable } from '@angular/core';
import { Contato } from './contato';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(public database: AngularFireDatabase) { }

  insert(contato: Contato){
    this.database.list('contato').push(contato).then((result : any) => {
      console.log(result.key);
      
    })
  }

  update(contato: Contato, key: string){
    this.database.list('contato').update(key, contato).catch((err: any) => {
      console.error(err);
    })
  }

  getAll(){
      return this.database.list('contato')
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as Contato }))
        })
      )  
    }

  delete(key: string){
    this.database.object(`contato/${key}`)
  }

}
