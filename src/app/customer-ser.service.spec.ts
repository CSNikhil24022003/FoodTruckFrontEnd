import { TestBed } from '@angular/core/testing';

import { CustomerSerService } from './customer-ser.service';

describe('CustomerSerService', () => {
  let service: CustomerSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
