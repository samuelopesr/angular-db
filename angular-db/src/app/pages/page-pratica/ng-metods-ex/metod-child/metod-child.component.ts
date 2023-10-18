import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-metod-child',
  templateUrl: './metod-child.component.html',
  styleUrls: ['./metod-child.component.scss']
})
export class MetodChildComponent implements OnChanges {

  @Input() message: string

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes); 
  }

}
