import { TestBed } from '@angular/core/testing';

import { ViewMarcasService } from './view-marcas.service';

describe('ViewMarcasService', () => {
  let service: ViewMarcasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewMarcasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
