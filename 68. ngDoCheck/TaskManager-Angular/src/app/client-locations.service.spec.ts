import { TestBed } from '@angular/core/testing';

import { ClientLocationsService } from './client-locations.service';

describe('ClientLocationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientLocationsService = TestBed.get(ClientLocationsService);
    expect(service).toBeTruthy();
  });
});
