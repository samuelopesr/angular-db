import { Component } from '@angular/core';
import { AutenticationService } from 'src/app/autentication.service';

@Component({
  selector: 'app-page-users',
  templateUrl: './page-users.component.html',
  styleUrls: ['./page-users.component.scss']
})
export class PageUsersComponent {

  constructor(public auth: AutenticationService)
  {
  }



  
}
