import { TestBed } from '@angular/core/testing';

import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountriesService = TestBed.get(CountriesService);
    expect(service).toBeTruthy();
  });
});
