import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommentsComponent } from './view-comments.component';

describe('ViewCommentsComponent', () => {
  let component: ViewCommentsComponent;
  let fixture: ComponentFixture<ViewCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
