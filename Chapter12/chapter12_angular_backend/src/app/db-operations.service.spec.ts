import { TestBed } from '@angular/core/testing';

import { DbOperationsService } from './db-operations.service';

describe('DbOperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbOperationsService = TestBed.get(DbOperationsService);
    expect(service).toBeTruthy();
  });
});
