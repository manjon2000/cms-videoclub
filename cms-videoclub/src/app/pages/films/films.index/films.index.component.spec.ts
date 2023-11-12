import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsIndexComponent } from './films.index.component';

describe('FilmsIndexComponent', () => {
  let component: FilmsIndexComponent;
  let fixture: ComponentFixture<FilmsIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmsIndexComponent]
    });
    fixture = TestBed.createComponent(FilmsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
