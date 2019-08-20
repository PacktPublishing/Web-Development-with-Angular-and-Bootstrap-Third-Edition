import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbModalComponent } from './ngb-modal.component';

describe('NgbModalComponent', () => {
  let component: NgbModalComponent;
  let fixture: ComponentFixture<NgbModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
