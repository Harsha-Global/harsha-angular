import { TestBed } from '@angular/core/testing';

import { HotelsService } from './hotels.service';

describe('HotelsService', () => {
  let service: HotelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
