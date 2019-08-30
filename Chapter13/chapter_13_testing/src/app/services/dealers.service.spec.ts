import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DealersService } from './dealers.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {Dealers} from './dealers';

describe('DealersService', () => {
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));


  it('Dealers Service should be created', () => {
    const service: DealersService = TestBed.get(DealersService);
    expect(service).toBeTruthy();
  });

  it('Test Dependency Injection to get 4 dealers', () => {
      const service: DealersService = TestBed.get(DealersService);
      let dealers = service.getDealers();
      expect(dealers.length).toBe(4);
  });
  it('Test if the first Dealer is North Auto', () => {
      const service: DealersService = TestBed.get(DealersService);
      let dealers = service.getDealers();
      expect(dealers[0].name).toBe('North Auto');
  });

  it('Test if the dealer returned from object is World Auto', () => {
      const service: DealersService = TestBed.get(DealersService);
      let dealerObj = service.getDealerObject();
      expect(dealerObj.name).toBe('Auto');
  });

  it('should return the correct properties', () => {
    var dealer = new Dealers();
    dealer.username = 'NorthWest';
    dealer.name = 'Auto';

    expect(dealer.username).toBe('NorthWest');
    expect(dealer.name).toBe('Auto');

  });

});
