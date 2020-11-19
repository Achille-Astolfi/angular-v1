import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-digit',
  templateUrl: './calculator-digit.component.html',
  styleUrls: ['./calculator-digit.component.css']
})
export class CalculatorDigitComponent implements OnInit {

  @Input() myDigit!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
