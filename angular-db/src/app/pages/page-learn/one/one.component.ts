import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnDestroy {
  title: string = "Né bão"

  ngOnDestroy(): void { console.log("I am destroyed") }
}
