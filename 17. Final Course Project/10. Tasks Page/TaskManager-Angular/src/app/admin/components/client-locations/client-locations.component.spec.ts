import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLocationsComponent } from './client-locations.component';

describe('ClientLocationsComponent', () => {
  let component: ClientLocationsComponent;
  let fixture: ComponentFixture<ClientLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
