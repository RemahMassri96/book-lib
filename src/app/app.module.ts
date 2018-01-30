import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {ShoppingListAddComponent} from 'app/shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import { RecipestartComponent } from './recipestart/recipestart.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { routing } from "app/app.routes";
import { RecipeService } from "app/recipe.service";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
  
    RecipesComponent,
    ShoppingListAddComponent,
    DropdownDirective,
    RecipestartComponent,
    RecipeEditComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
      
  ],
  providers: [RecipeService,ShoppingListService ],

  bootstrap: [AppComponent]
})
export class AppModule { }
