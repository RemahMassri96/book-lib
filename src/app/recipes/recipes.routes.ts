
import { RecipeDetailComponent } from "app/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "app/recipe-edit/recipe-edit.component";
import { RecipestartComponent } from "app/recipestart/recipestart.component";
import { Routes, RouterModule } from "@angular/router";

export const RECIPE_ROUTES: Routes = [
  { path: '', component: RecipestartComponent },
  { path: 'new', component: RecipeEditComponent },
  { path: ':id', component: RecipeDetailComponent },
  { path: ':id/edit', component: RecipeEditComponent }
];
 
