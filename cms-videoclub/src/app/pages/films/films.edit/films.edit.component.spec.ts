import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsEditComponent } from './films.edit.component';

describe('FilmsEditComponent', () => {
  let component: FilmsEditComponent;
  let fixture: ComponentFixture<FilmsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmsEditComponent]
    });
    fixture = TestBed.createComponent(FilmsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
