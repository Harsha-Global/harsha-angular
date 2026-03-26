import { TestBed } from '@angular/core/testing';

import { JwtUnAuthorizedInterceptorService } from './jwt-un-authorized-interceptor.service';

describe('JwtUnAuthorizedInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtUnAuthorizedInterceptorService = TestBed.get(JwtUnAuthorizedInterceptorService);
    expect(service).toBeTruthy();
  });
});
