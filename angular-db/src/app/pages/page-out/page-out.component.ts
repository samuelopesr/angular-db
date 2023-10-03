import { Component } from '@angular/core';
import { AutenticationService } from 'src/app/autentication.service';

@Component({
  selector: 'app-page-out',
  templateUrl: './page-out.component.html',
  styleUrls: ['./page-out.component.scss']
})
export class PageOutComponent {

  constructor(public auth: AutenticationService){
    
  }
} 
