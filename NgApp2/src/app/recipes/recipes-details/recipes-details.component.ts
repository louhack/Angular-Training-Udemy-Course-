import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

    addedToSl: boolean = false;
     @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
     
  }

  addToShoppingList() {
      // console.log("Ingredients " + this.recipe.ingredients);
      this.recipeService.addIngredientsToSL(this.recipe.ingredients);
      this.addedToSl = true;

  }

}
