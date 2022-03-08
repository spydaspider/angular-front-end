import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientListComponentComponent } from './ingredient-list-component.component';

describe('IngredientListComponentComponent', () => {
  let component: IngredientListComponentComponent;
  let fixture: ComponentFixture<IngredientListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
