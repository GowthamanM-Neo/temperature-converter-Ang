import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  beforeEach(() => {
    component = new HeaderComponent();
  });

  it('test_case1',()=>{
      const a=component.onSubmit('0','option1');
      expect(a).toBe('-17.78°C');
  });

  it('test_case2',()=>{
    const b=component.onSubmit('0','option2');
    expect(b).toBe('32.00°F');
});
});
