import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbCollapseComponent } from './ngb-collapse.component';

describe('NgbCollapseComponent', () => {
  let component: NgbCollapseComponent;
  let fixture: ComponentFixture<NgbCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
