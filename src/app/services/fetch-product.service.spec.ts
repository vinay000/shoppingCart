import { TestBed } from '@angular/core/testing';

import { FetchProductService } from './fetch-product.service';

describe('FetchProductService', () => {
  let service: FetchProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
