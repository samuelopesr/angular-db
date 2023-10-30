import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  KeyValueDiffers,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Costumer } from 'src/app/shared/costumer';

@Component({
  selector: 'app-metod-child',
  templateUrl: './metod-child.component.html',
  styleUrls: ['./metod-child.component.scss'],
})
export class MetodChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() public message: string;
  @Input() public costumer: Costumer;
  public changelog: string[] = [];
  public oldCostumer: Costumer = new Costumer();
  public DoCheckCount: number = 0;
  differ: any;

  constructor(private differs: KeyValueDiffers) {}
  ngAfterViewInit(): void {
    console.log('after view init');
  }

  ngAfterViewChecked(): void {
    console.log('after view checked');
  }

  ngAfterContentChecked(): void {
    console.log('after content checked');
  }

  ngAfterContentInit(): void {
    console.log('after content init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    // console.log(JSON.stringify(changes));
    // console.log(changes);
    // console.log(this.changelog);
    for (const propName in changes) {
      const change = changes[propName];
      const from = JSON.stringify(change.previousValue);
      const to = JSON.stringify(change.currentValue);
      const changeLog = `Observing the values of: ${propName}: changed from ${from} to ${to}`;
      // this.changelog.push(changeLog);
    }
  }

  ngDoCheck(): void {
    console.log('DoCheck');
    this.DoCheckCount++;

    if (
      this.oldCostumer.name !== this.costumer.name ||
      this.oldCostumer.code !== this.costumer.code
    ) {
      const to = JSON.stringify(this.costumer);
      const from = JSON.stringify(this.oldCostumer);
      const changeLog = `changed from ${from} to ${to}`;
      console.log(`it's changeLog ${changeLog}`);

      // console.log("it's costumer in Do Check", this.costumer);

      this.oldCostumer = Object.assign({}, this.costumer);
      // console.log("Old Costumer Do Check", this.oldCostumer);

      const costumerChanges = this.differ.diff(this.costumer);

      if (costumerChanges) {
        console.log(costumerChanges);

        costumerChanges.forEachChangedItem((r) =>
          this.changelog.push(
            'changed: ' + r.key + '' + JSON.stringify(r.currentValue)
          )
        );

        costumerChanges.forEachAddedItem((r) =>
          this.changelog.push(
            'added: ' + r.key + '' + JSON.stringify(r.currentValue)
          )
        );

        costumerChanges.forEachRemovedItem((r) =>
          this.changelog.push(
            'removed: ' + r.key + '' + JSON.stringify(r.currentValue)
          )
        );

        console.log(this.changelog);
      }
    }
  }

  ngOnInit(): void {
    console.log('OnInit');
    this.oldCostumer = Object.assign({}, this.costumer);
    console.log('Old costumer OnInit', this.oldCostumer);

    this.differ = this.differs.find(this.costumer).create();
    console.log(this.differ);

    console.log(this.changelog);
  }
}
