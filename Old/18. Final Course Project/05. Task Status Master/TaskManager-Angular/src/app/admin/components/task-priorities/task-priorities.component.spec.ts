import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPrioritiesComponent } from './task-priorities.component';

describe('TaskPrioritiesComponent', () => {
  let component: TaskPrioritiesComponent;
  let fixture: ComponentFixture<TaskPrioritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskPrioritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPrioritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
