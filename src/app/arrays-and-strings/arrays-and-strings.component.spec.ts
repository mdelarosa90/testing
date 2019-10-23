import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraysAndStringsComponent } from './arrays-and-strings.component';

describe('ArraysAndStringsComponent', () => {
  let component: ArraysAndStringsComponent;
  let fixture: ComponentFixture<ArraysAndStringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraysAndStringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraysAndStringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should include the name in the message', () => {
    expect(component.getGreet('mosh')).toContain('mosh');
  });

  it('should return the supported currencies', () => {
    const result = component.getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');

  });
});
