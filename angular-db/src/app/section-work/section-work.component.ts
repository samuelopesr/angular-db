import { Component, OnInit } from '@angular/core';
import { AutenticationService } from '../autentication.service';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs';


export interface Item{
  key: string
  email: string
  name: string
  age: number  
}

@Component({
  selector: 'app-section-work',
  templateUrl: './section-work.component.html',
  styleUrls: ['./section-work.component.scss']
})
export class SectionWorkComponent implements OnInit {
 
email = '' as string;
password = '' as string;

forNewName = '' as string
forNewAge = '' as string

ListRef: any;
list: Observable<Item[]>;

constructor(public auth: AutenticationService, private database: AngularFireDatabase){
  this.ListRef = database.list('list')
  this.list = this.ListRef.snapshotChanges().pipe(
    map((changes: SnapshotAction<Item>[]) => changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }
      )
    )
  )
)

}

ngOnInit(){}

addItem()
{
  this.ListRef.push({
    name: this.forNewName,
    age: this.forNewAge,
    email: this.auth.user.email
  })
  this.forNewName = ''
  this.forNewAge = ''
}

deleteItem(key: string)
{
  this.ListRef.remove(key)
}

}
