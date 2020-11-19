import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() closeIsVisible!: boolean;
  @Output() closeIsVisibleChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  hideMeAgain(event: Event): void {
    this.closeIsVisibleChange.emit(false);
  }

}
