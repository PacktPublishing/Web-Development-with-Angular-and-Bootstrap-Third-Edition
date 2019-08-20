import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AutoListComponent } from './auto-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DealersService } from '../services/dealers.service';
 
describe('AutoListComponent', () => {
  let component: AutoListComponent;
  let fixture: ComponentFixture<AutoListComponent>;
  let service, http, httpMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ AutoListComponent ],
      providers:[DealersService],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(DealersService);
    httpMock = TestBed.get(HttpTestingController);
    http = TestBed.get(HttpClientTestingModule);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ngFor test case to test the count is 4
  it('Should have 3 Brands coming from ngFor directive', async(() => {
      const fixture = TestBed.createComponent(AutoListComponent);
      fixture.detectChanges();
      //const compiled = fixture.debugElement.nativeElement;
      const el = fixture.debugElement.queryAll(By.css('.cars-list > li'));
      expect(el.length).toBe(3);
  }));

  // ngIf test script
  it('Test ngIf directive in component', async(() => {
    const fixture = TestBed.createComponent(AutoListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const el = compiled.querySelector('#carLength');
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('vehicles', 'vehicles');
  }));


  // ngSwitch test script
  it('Test ngSwitch directive in component', async(() => {
    const fixture = TestBed.createComponent(AutoListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const el = compiled.querySelector('.data-tab > div');
    const content = el.textContent;
    expect(content).toContain('ngSwitch Case 1');
  }));


  // Test button is clicked
  it('should click a button and call method findAuto', async(() => {
    const fixture = TestBed.createComponent(AutoListComponent);
    component = fixture.componentInstance;
    spyOn(component, 'findAuto');
    component.findAuto();
    fixture.detectChanges();
   expect(component.findAuto).toHaveBeenCalled();

  }));

  // Test the service called from component
  it('should click a button and call method findAuto to get length as 4', async(() => {
    const fixture = TestBed.createComponent(AutoListComponent);
    component = fixture.componentInstance;

    spyOn(component, 'listAllDealers');
    let dealers = component.listAllDealers();
    fixture.detectChanges();
    //expect(dealers.length).toEqual(4);

  }));

  // Test button is clicked
  it('Test the service in a component', async(() => {
    const fixture = TestBed.createComponent(AutoListComponent);
    component = fixture.componentInstance;
    
    let dealers = service.getDealers();
    fixture.detectChanges();
    //console.log(dealers);
   expect(dealers.length).toBe(4);

  }));

  // Test HTTP Request From Component
  it('Test HTTP Request Method', async(() => {
    const fixture = TestBed.createComponent(AutoListComponent);
    component = fixture.componentInstance;
        service = TestBed.get(DealersService);
    let carList = component.getCarList();
    //console.log(carList);
    fixture.detectChanges();
     const req = httpMock.expectOne('http://localhost:3000/cars');
     
      expect(req.request.method).toBe('GET');
      req.flush({});
    
  }));


   // Test HTTP Request From Component
  it('Test HTTP Request GET Method With subscribe', async(() => {
    const fixture = TestBed.createComponent(AutoListComponent);
    component = fixture.componentInstance;
    service = TestBed.get(DealersService);
    
    component.listDealerById().subscribe(result => expect(result.length).toBeGreaterThan(0));
       
    //const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users?id=1');
    //console.log(req); 
    
    //expect(req.request.method).toBe('GET');
  
  }));


 // Test HTTP Request From Component
  it('Test HTTP Request GET Method Value should be greater than 1', async(() => {
    const fixture = TestBed.createComponent(AutoListComponent);
    component = fixture.componentInstance;
    component.listDealerById().subscribe(result => expect(result.length).toBeGreaterThan(0));
  
  }));

  


});
