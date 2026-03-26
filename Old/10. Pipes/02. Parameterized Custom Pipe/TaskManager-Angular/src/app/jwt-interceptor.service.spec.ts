import { TestBed } from '@angular/core/testing';

import { JwtInterceptorService } from './jwt-interceptor.service';

describe('JwtInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtInterceptorService = TestBed.get(JwtInterceptorService);
    expect(service).toBeTruthy();
  });
});
