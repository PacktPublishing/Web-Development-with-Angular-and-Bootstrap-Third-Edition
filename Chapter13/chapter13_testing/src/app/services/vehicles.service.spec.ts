import { VehiclesService } from './vehicles.service';

import {Injectable, Injector} from '@angular/core';

import {
  fakeAsync,
  tick
} from '@angular/core/testing';

import { async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('VehiclesService', () => {

   beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ VehiclesService ]
  }));

  it('should be created', () => {
    const service: VehiclesService = TestBed.get(VehiclesService);
    expect(service).toBeTruthy();
  });

  it('should return available users (async)', inject([VehiclesService], (service) => {
    service.get().subscribe(x => {
      expect(x).toContain('sasha');
      expect(x).toContain('vasia');
      expect(x).toContain('pasha');
      expect(x.length).toEqual(3);
  });

}));

});