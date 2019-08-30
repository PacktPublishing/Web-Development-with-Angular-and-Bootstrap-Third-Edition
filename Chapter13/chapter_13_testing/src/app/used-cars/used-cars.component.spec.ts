import { async, ComponentFixture, tick,TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsedCarsComponent } from './used-cars.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
 
import {NgForm} from '@angular/forms';

describe('UsedCarsComponent', () => {
  let component: UsedCarsComponent;
  let fixture: ComponentFixture<UsedCarsComponent>;
  let httpMock;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ UsedCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedCarsComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.get(HttpTestingController);

    fixture.detectChanges();
  });

/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the http call', () => {
    expect(component).toBeTruthy();
  });
*/

it('Test HTTP POST Request Method', async(() => {
    const fixture = TestBed.createComponent(UsedCarsComponent);
    component = fixture.componentInstance;

    let carDetails:any[];

    const testForm = <NgForm>{
    value: {
        carId: "45",
        carName: "Force "
    }
};
  let fakeResponse;
    // carDetails = component.onSubmit(testForm);
     //console.log(carDetails[0]);
    component.onSubmit(testForm).subscribe(data => {
        // in here value will be whatever you put as returnValue (remember to keep the observable.of())
        //fakeResponse = data;
        console.log(data);
        fakeResponse =data;
      
      });
       console.log("result is");
      console.log(fakeResponse);
     //expect(fakeResponse).toBe('Force');
      
      /*

      console.log(this.carDetails);

  //  const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    
    //expect(req.request.method).toBe('POST');
  */
  }));

});
