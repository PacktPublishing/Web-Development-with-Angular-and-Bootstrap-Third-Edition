import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialNavigationComponent } from './material-navigation.component';

describe('MaterialNavigationComponent', () => {
  let component: MaterialNavigationComponent;
  let fixture: ComponentFixture<MaterialNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
