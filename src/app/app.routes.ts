import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RECIPE_ROUTES } from "app/recipes/recipes.routes";

export const APP_ROUTES_PROVIDERS: Routes = [

    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES},
    { path: 'recipes/:id', component: ShoppingListComponent },
  
    { path: 'shopping-list', component: ShoppingListComponent }
  
];

export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);