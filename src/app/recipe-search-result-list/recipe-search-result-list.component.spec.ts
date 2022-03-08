import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSearchResultListComponent } from './recipe-search-result-list.component';

describe('RecipeSearchResultListComponent', () => {
  let component: RecipeSearchResultListComponent;
  let fixture: ComponentFixture<RecipeSearchResultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeSearchResultListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSearchResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
