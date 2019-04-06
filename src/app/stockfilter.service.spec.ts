import { TestBed, inject } from '@angular/core/testing';

import { StockfilterService } from './stockfilter.service';

describe('StockFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockfilterService]
    });
  });

  it('should be created', inject([StockFilterService], (service: StockFilterService) => {
    expect(service).toBeTruthy();
  }));
});
