import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeList } from './employee-list';

describe('EmployeeList', () => {
  let component: EmployeeList;
  let fixture: ComponentFixture<EmployeeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
