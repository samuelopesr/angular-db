import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.test = changes
  }

  public test: object

  @Input() public reciveNome: string = ""

  @Input() public reciveSobreNome: string = ""

  @Input() public reciveCpf: number | RegExp
  
  @Input() public reciveCompany: string = ""

  @Input() public reciveBankAccount: number | RegExp

  @Input() public reciveId: number | RegExp

  @Input() public recivePhoneNum: number | RegExp

  @Input() public reciveEmail: string = ""

  public changeValue(field: any)
  {   
    const newValue = prompt(`Enter a new value for ${field}`)

    if(newValue !== null)
    {
      this[field] = newValue
    }
  }

}
