import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put('https://ng-recipebook-shoppinglist.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    fetchRecipes() {
        return this.http.get('https://ng-recipebook-shoppinglist.firebaseio.com/recipes.json')
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (const recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.loadRecipesFromDB(recipes);
                }
            );
    }
}
