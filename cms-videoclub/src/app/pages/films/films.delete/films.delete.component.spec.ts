import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsDeleteComponent } from './films.delete.component';

describe('FilmsDeleteComponent', () => {
  let component: FilmsDeleteComponent;
  let fixture: ComponentFixture<FilmsDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmsDeleteComponent]
    });
    fixture = TestBed.createComponent(FilmsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
