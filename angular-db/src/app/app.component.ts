import { Component, OnInit } from '@angular/core';
import { AutenticationService } from './autentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-db';
  
  constructor(private auth: AutenticationService){}

  ngOnInit() {
    this.auth.autentication.authState.subscribe((user) => {
      if (user){
        this.auth.user = user;
      } else {
        this.auth.user = null;
      }
    })
  }

}
