import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements DoCheck {
  ngDoCheck(): void {
    console.log("do Check");
  }
  ngAfterContentInit(): void {
    console.log("content projected");
  }
}
