import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Costumer } from 'src/app/shared/costumer';

@Component({
  selector: 'app-metod-child',
  templateUrl: './metod-child.component.html',
  styleUrls: ['./metod-child.component.scss']
})
export class MetodChildComponent implements OnChanges, OnInit {
  @Input() public message: string
  @Input() public costumer: Costumer
  public changelog: string[] = []
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges"); 
    console.log(JSON.stringify(changes));
    console.log(changes);
    
    for(const propName in changes)
    { 
      const change = changes[propName]
      const from = JSON.stringify(change.previousValue)
      const to = JSON.stringify(change.currentValue)
      const changeLog = `${propName}: changed from ${from} to ${to}`
      this.changelog.push(changeLog)
    }

    
  }
  
  ngOnInit(): void {
    console.log("onInit");
  }
}
