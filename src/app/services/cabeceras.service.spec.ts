import { TestBed } from '@angular/core/testing';

import { CabecerasService } from './cabeceras.service';

describe('CabecerasService', () => {
  let service: CabecerasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabecerasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
