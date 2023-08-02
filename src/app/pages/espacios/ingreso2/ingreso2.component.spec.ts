import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ingreso2Component } from './ingreso2.component';

describe('Ingreso2Component', () => {
  let component: Ingreso2Component;
  let fixture: ComponentFixture<Ingreso2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ingreso2Component]
    });
    fixture = TestBed.createComponent(Ingreso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
