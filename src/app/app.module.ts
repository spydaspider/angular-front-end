import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonXComponent } from './button-x/button-x.component';
import { SmallXComponent } from './small-x/small-x.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddIngredientPageComponent } from './add-ingredient-page/add-ingredient-page.component';
import { RecipeSearchPageComponent } from './recipe-search-page/recipe-search-page.component';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';
import { IngredientListComponentComponent } from './ingredient-list-component/ingredient-list-component.component';
import { RecipeSearchResultListComponent } from './recipe-search-result-list/recipe-search-result-list.component';
import { MealsListComponent } from './meals-list/meals-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonXComponent,
    SmallXComponent,
    HomePageComponent,
    AddIngredientPageComponent,
    RecipeSearchPageComponent,
    ShoppingListPageComponent,
    IngredientListComponentComponent,
    RecipeSearchResultListComponent,
    MealsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
