import { TestBed } from '@angular/core/testing';

import { CrudServiceService } from './crud-service.service';

describe('CrudServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudServiceService = TestBed.get(CrudServiceService);
    expect(service).toBeTruthy();
  });
});
