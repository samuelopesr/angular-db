import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { OneComponent } from '../one/one.component';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnChanges {

  @Input() text: string

    ngOnChanges(changes: SimpleChanges): void{
      console.log(changes);
    }

      constructor(){}
}
