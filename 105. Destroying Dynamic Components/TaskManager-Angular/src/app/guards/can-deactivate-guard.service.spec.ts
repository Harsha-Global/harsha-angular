import { TestBed } from '@angular/core/testing';

import { CanDeactivateGuardService } from './can-deactivate-guard.service';

describe('CanDeactivateGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanDeactivateGuardService = TestBed.get(CanDeactivateGuardService);
    expect(service).toBeTruthy();
  });
});
