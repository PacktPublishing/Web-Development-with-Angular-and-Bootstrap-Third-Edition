import { TestBed } from '@angular/core/testing';

import { VendorsService } from './vendors.service';

describe('VendorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendorsService = TestBed.get(VendorsService);
    expect(service).toBeTruthy();
  });
});
