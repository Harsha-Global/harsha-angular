import { TestBed } from '@angular/core/testing';

import { RouterLoggerService } from './router-logger.service';

describe('RouterLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouterLoggerService = TestBed.get(RouterLoggerService);
    expect(service).toBeTruthy();
  });
});
