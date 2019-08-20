import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCardsComponent } from './material-cards.component';

describe('MaterialCardsComponent', () => {
  let component: MaterialCardsComponent;
  let fixture: ComponentFixture<MaterialCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
