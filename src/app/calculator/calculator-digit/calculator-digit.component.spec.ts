import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorDigitComponent } from './calculator-digit.component';

describe('CalculatorDigitComponent', () => {
  let component: CalculatorDigitComponent;
  let fixture: ComponentFixture<CalculatorDigitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorDigitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorDigitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
