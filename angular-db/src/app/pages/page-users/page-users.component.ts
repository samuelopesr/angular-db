import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

import { AutenticationService } from 'src/app/autentication.service';


export interface item{
  key: string
  email: string
  name: string
  age: number  
}

@Component({
  selector: 'app-page-users',
  templateUrl: './page-users.component.html',
  styleUrls: ['./page-users.component.scss']
})
export class PageUsersComponent implements OnInit{

  forNewName = '' as string
  forNewAge = '' as string

  ListRef: any;
  list: Observable<item[]>;

constructor(public auth: AutenticationService, private database: AngularFireDatabase){
  this.ListRef = database.list('list')
  this.list = this.ListRef.snapshotChanges().pipe(
    map((changes: SnapshotAction<item>[]) => changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }
      )
    )
  )
)

}
  ngOnInit() {
    
  }
 
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
  



  

