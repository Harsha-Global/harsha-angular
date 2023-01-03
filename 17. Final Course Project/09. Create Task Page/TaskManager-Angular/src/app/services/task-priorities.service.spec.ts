import { TestBed } from '@angular/core/testing';

import { TaskPrioritiesService } from './task-priorities.service';

describe('TaskPrioritiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskPrioritiesService = TestBed.get(TaskPrioritiesService);
    expect(service).toBeTruthy();
  });
});
