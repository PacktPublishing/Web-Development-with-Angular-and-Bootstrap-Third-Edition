import { TestBed, async, inject } from '@angular/core/testing';

import { ActivateAdminGuard } from './activate-admin.guard';

describe('ActivateAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivateAdminGuard]
    });
  });

  it('should ...', inject([ActivateAdminGuard], (guard: ActivateAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
