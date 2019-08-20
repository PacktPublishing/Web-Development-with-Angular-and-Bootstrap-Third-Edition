import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JacketListComponent } from './jacket-list.component';

describe('JacketListComponent', () => {
  let component: JacketListComponent;
  let fixture: ComponentFixture<JacketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JacketListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JacketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
