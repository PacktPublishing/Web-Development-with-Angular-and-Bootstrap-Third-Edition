import { TestBed } from '@angular/core/testing';

import { ImagesService } from './images.service';

describe('ImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagesService = TestBed.get(ImagesService);
    expect(service).toBeTruthy();
  });

  it('check count of sources',()=>{
     const service: ImagesService = TestBed.get(ImagesService);
    // let sourceLength = service.getImageSources();
     
  });
});
