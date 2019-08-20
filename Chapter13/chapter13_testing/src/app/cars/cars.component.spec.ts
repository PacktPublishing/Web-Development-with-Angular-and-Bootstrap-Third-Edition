import { async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CarsComponent } from './cars.component';
import { VehiclesService } from '../services/vehicles.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;
  let _vehiclesService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [
        CarsComponent
      ],
      providers: [VehiclesService]
    }).compileComponents();

     _vehiclesService = TestBed.get(VehiclesService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should call Vehicle Service and call getBrands and check count', () => {

    let brands = _vehiclesService.getBrands();
    expect(brands.length).toBe(4);
    });


    it('Test ngIf directive in component', async(() => {
      const fixture = TestBed.createComponent(CarsComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const messages = compiled.querySelector('#isAvailable');
      expect(messages).toBeFalsy();
    }));

    it('Should have 4 Brands coming from ngFor directive', async(() => {
      const fixture = TestBed.createComponent(CarsComponent);
      fixture.detectChanges();
      
       let lis = fixture.debugElement.nativeElement.querySelectorAll('li');
        expect(lis.length).toBe(4);
    }));

     it('Should check the ngModel directive', async(() => {
      const fixture = TestBed.createComponent(CarsComponent);
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        let el = fixture.debugElement.query(By.css('input[name="ownerName"]'));
        let actual = el.nativeElement.value;
        expect('Packt Pub').toBe(actual);
      });

    }));

});
