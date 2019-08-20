import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // Check the app has 2 links
  it('Check there are 2 links in the nav bar', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    let linkDes = fixture.debugElement.queryAll(By.css('.nav-link'));
    expect(linkDes.length).toBe(3);

  });

  // Check the app has first link as "List Cars"
  it('should check that the first link is list-cars ', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    let linkDes = fixture.debugElement.queryAll(By.css('.nav-link'));
    expect(linkDes[0].attributes.routerLink).toBe('/home');
  });

  // Check the app if "List Cars" link exist
  it('Find index of the link /list-cars', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    fixture.detectChanges();
    let linkDes = fixture.debugElement.queryAll(By.css('.nav-link'));
    const index = linkDes.findIndex(de => {
      return de.attributes.routerLink === '/list-used-cars';
    });
    expect(index).toBeGreaterThan(-1);
  });
*/

});
