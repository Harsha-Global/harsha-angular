import { TestBed } from '@angular/core/testing';

import { Counter } from './counter';

describe('Counter', () => {
  let service: Counter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Counter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
