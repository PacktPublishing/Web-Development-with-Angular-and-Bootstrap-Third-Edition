import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbCarouselComponent } from './ngb-carousel.component';

describe('NgbCarouselComponent', () => {
  let component: NgbCarouselComponent;
  let fixture: ComponentFixture<NgbCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
