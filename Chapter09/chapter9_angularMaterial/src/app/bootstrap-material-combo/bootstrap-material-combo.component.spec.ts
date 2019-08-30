import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapMaterialComboComponent } from './bootstrap-material-combo.component';

describe('BootstrapMaterialComboComponent', () => {
  let component: BootstrapMaterialComboComponent;
  let fixture: ComponentFixture<BootstrapMaterialComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapMaterialComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapMaterialComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
