import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ingreso1Component } from './ingreso1.component';

describe('Ingreso1Component', () => {
  let component: Ingreso1Component;
  let fixture: ComponentFixture<Ingreso1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ingreso1Component]
    });
    fixture = TestBed.createComponent(Ingreso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
