import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Recipe} from '../recipe';
import { RecipeItemComponent } from "./recipe-item.component";
import { RecipeService } from "app/recipe.service";


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html' 
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [];    
  //  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new  Recipe ('Dummy','Dummy','http://pad1.whstatic.com/images/thumb/c/c8/Make-a-Halloween-Dummy-Step-3.jpg/aid7602-v4-728px-Make-a-Halloween-Dummy-Step-3.jpg', []);


  constructor(private recipeService : RecipeService  )  { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
    this.recipeService.recipesChanged.subscribe(
      (recipes:Recipe[]) => this.recipes=recipes

    );
  }

 // onSelected(recipe:Recipe){
   // this.recipeSelected.emit(recipe);

 // }

}
