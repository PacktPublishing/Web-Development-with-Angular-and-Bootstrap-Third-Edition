import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormValidationComponent } from './custom-form-validation.component';

describe('CustomFormValidationComponent', () => {
  let component: CustomFormValidationComponent;
  let fixture: ComponentFixture<CustomFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
