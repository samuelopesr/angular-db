import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-twb-child',
  templateUrl: './twb-child.component.html',
  styleUrls: ['./twb-child.component.scss']
})
export class TwbChildComponent {
  @Input() size!: number | string
  @Output() sizeChange = new EventEmitter<number>()

  dec(){ this.resize(-1) }
  inc(){ this.resize(+1) }

  resize(delta: number)
  {
    this.size = Math.min(40, Math.max(8, +this.size + delta))
    this.sizeChange.emit(this.size);
  }
}
