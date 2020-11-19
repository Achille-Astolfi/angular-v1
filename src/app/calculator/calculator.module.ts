import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorDigitComponent } from './calculator-digit/calculator-digit.component';



@NgModule({
  declarations: [CalculatorComponent, CalculatorDigitComponent],
  imports: [
    CommonModule
  ],
  exports: [CalculatorComponent]
})
export class CalculatorModule { }
export { CalculatorComponent }
