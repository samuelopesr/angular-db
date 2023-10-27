import { Component } from '@angular/core';
import { Costumer } from 'src/app/shared/costumer';

@Component({
  selector: 'app-ng-metods-ex',
  templateUrl: './ng-metods-ex.component.html',
  styleUrls: ['./ng-metods-ex.component.scss']
})
export class NgMetodsExComponent {

  title: string = "More Study about Ng Metods";
  message: string = "";
  costumer: Costumer = new Costumer();
  name: string = "";
  code: number;

  public updateCostumer()
  { 

    this.costumer.name = this.name
    this.costumer.code = this.code
    console.log(this.costumer); 
    
    this.message = ""
    this.name = ""
    this.code = 0
  }

}
