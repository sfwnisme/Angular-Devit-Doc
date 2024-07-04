import { Component, EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Output() incrementCountEvent = new EventEmitter<number>();
  @Output() addItemEvent = new EventEmitter<string>();

  count = 0;
  onClick() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
  }
  addItem() {
    this.addItemEvent.emit(`add item emitter ${this.count++}`);
  }
}
