import { TestBed, async, inject } from '@angular/core/testing';

import { PhotosGuard } from './photos.guard';

describe('PhotosGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotosGuard]
    });
  });

  it('should ...', inject([PhotosGuard], (guard: PhotosGuard) => {
    expect(guard).toBeTruthy();
  }));
});
