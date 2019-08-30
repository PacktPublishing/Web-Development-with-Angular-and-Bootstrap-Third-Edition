import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModalsComponent } from './material-modals.component';

describe('MaterialModalsComponent', () => {
  let component: MaterialModalsComponent;
  let fixture: ComponentFixture<MaterialModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
