/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';

describe('HighlightDirective', () => {
  @Component({
    selector: 'test-component',
    template: ''
  })
  class TestComponent {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HighlightDirective,
        TestComponent
      ]
    });
  })

  it('should create an instance', () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<p highlight>This should be highlighted</p>`
      }
    });
    const fixture = TestBed.createComponent(TestComponent);
    const directiveEl = fixture.debugElement.query(By.directive(HighlightDirective));

    expect(directiveEl).toBeDefined();
    expect(directiveEl.nativeElement).toBeDefined();
  });
});
