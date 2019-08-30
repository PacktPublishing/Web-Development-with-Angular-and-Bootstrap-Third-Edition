import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListingComponent } from './photo-listing.component';

describe('PhotoListingComponent', () => {
  let component: PhotoListingComponent;
  let fixture: ComponentFixture<PhotoListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
