import { TestBed } from '@angular/core/testing';

import { TaskStatusesService } from './task-statuses.service';

describe('TaskStatusesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskStatusesService = TestBed.get(TaskStatusesService);
    expect(service).toBeTruthy();
  });
});
