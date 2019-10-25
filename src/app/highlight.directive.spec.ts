import { HighlightDirective } from './highlight.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <p highlight="cyan">First </p>
  <p highlight>First</p>
  `,
})

class DirectiveHostComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

  it('should highlight the first element with cyan', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const p: HTMLElement = debugEl.querySelector('p');
    expect(p.style.backgroundColor).toBe('cyan');
  });

  it('should highlight the first element with yellow', () => {
    // fixture.detectChanges();
    // const de = fixture.debugElement.queryAll(By.css('p'))[1];
    // const directive = de.injector.get(HighlightDirective);
    // expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const p: HTMLElement = debugEl.querySelectorAll('p')[0];
    expect(p.style.backgroundColor).toBe('cyan');
  });
});
