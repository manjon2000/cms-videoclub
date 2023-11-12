import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesIndexComponent } from './employees.index.component';

describe('EmployeesIndexComponent', () => {
  let component: EmployeesIndexComponent;
  let fixture: ComponentFixture<EmployeesIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesIndexComponent]
    });
    fixture = TestBed.createComponent(EmployeesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
