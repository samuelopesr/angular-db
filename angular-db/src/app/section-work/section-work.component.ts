import { Component } from '@angular/core';
import { AutenticationService } from '../autentication.service';

@Component({
  selector: 'app-section-work',
  templateUrl: './section-work.component.html',
  styleUrls: ['./section-work.component.scss']
})
export class SectionWorkComponent {
 
 
email = '' as string;
password = '' as string;


constructor (public auth: AutenticationService){}



ngOnInit(){}


}
