import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { By } from '@angular/platform-browser';
import { InputvalidationDirective } from './directives/inputvalidation.directive';
//import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        CarsComponent,
        InputvalidationDirective
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('testing-app');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to testing-app!');
  });

  // Check the app has 2 links
  it('should check routerlink', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    let linkDes = fixture.debugElement.queryAll(By.css('.nav-link'));
    expect(linkDes.length).toBe(2);

  });

  // Check the app has first link as "List Cars"
  it('should check that the first link is list-cars ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    let linkDes = fixture.debugElement.queryAll(By.css('.nav-link'));
    
    expect(linkDes[0].properties.href).toBe('/list-cars', '1st link should go to Dashboard');
  });

  // Check the app if "List Cars" link exist
  it('should have a link to /list-cars', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let linkDes = fixture.debugElement.queryAll(By.css('.nav-link'));
    const index = linkDes.findIndex(de => {
      return de.properties['href'] === '/list-cars';
    });
    expect(index).toBeGreaterThan(-1);
  });

  it('should test the custom directive', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    let inputEl = fixture.debugElement.query(By.css('.nav-search'));

    inputEl.triggerEventHandler('focus', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('yellow');

    inputEl.triggerEventHandler('blur', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('red');

    //expect(index).toBeGreaterThan(-1);
  });

});
