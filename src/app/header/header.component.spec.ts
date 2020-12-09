import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  beforeEach(() => {
    component = new HeaderComponent();
  });
  it('checking centigrade conversion',()=>{
      const a=component.onSubmit('0','option1');
      expect(a).toBe('-17.78°C');
  });
  it('checking fahrenheit conversion',()=>{
    const b=component.onSubmit('0','option2');
    expect(b).toBe('32.00°F');
});
});
