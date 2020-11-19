import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentCloseIsVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  apriOnClick(event: Event): void {
    this.parentCloseIsVisible = true;
  }

}
