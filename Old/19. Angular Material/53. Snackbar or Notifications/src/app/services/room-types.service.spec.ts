import { TestBed } from '@angular/core/testing';

import { RoomTypesService } from './room-types.service';

describe('RoomTypesService', () => {
  let service: RoomTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
