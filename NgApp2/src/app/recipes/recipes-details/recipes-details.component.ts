import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

    addedToSl: boolean = false;
    recipe: Recipe;
    id: number;

    constructor(private recipeService: RecipeService,
      private route: ActivatedRoute,
      private router: Router) {

    }

    ngOnInit() {
      this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
      });
  }

  addToShoppingList() {
      // console.log("Ingredients " + this.recipe.ingredients);
      this.recipeService.addIngredientsToSL(this.recipe.ingredients);
      this.addedToSl = true;

  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    //this.router.navigate(['../', this.id,'edit'], { relativeTo: this.route });  // for demo purpose

  }

}
