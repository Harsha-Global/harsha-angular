import { TestBed } from '@angular/core/testing';

import { CanActivateGuardService } from './can-activate-guard.service';

describe('CanActivateGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActivateGuardService = TestBed.get(CanActivateGuardService);
    expect(service).toBeTruthy();
  });
});
