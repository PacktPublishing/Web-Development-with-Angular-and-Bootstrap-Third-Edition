import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPhotosComponent } from './preview-photos.component';

describe('PreviewPhotosComponent', () => {
  let component: PreviewPhotosComponent;
  let fixture: ComponentFixture<PreviewPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
