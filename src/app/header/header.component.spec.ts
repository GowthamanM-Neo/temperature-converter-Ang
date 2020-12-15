import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let h1: HTMLElement;
  beforeEach(() => {
    component = new HeaderComponent();
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance; // BannerComponent test instance
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('checking centigrade conversion',()=>{
      const a=component.onSubmit('0','option1');
      expect(a).toBe('-17.78°C');
  });

  it('checking fahrenheit conversion',()=>{
    const b=component.onSubmit('0','option2');
    expect(b).toBe('32.00°F');
});

it('should display original title', () => {
  expect(h1.textContent).toContain("Temperature Converter");
});

});
