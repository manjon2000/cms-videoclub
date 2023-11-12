import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesEditComponent } from './employees.edit.component';

describe('EmployeesEditComponent', () => {
  let component: EmployeesEditComponent;
  let fixture: ComponentFixture<EmployeesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesEditComponent]
    });
    fixture = TestBed.createComponent(EmployeesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
