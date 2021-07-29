import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatautocompleteComponent } from './matautocomplete.component';

describe('MatautocompleteComponent', () => {
  let component: MatautocompleteComponent;
  let fixture: ComponentFixture<MatautocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatautocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatautocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
