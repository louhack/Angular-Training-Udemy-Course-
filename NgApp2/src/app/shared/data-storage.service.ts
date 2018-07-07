import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();
        const header = new HttpHeaders().set('Authorization', 'Bearer dfgdfh');

    //     return this.httpClient
    //         .put('https://ng-recipebook-shoppinglist.firebaseio.com/recipes.json', this.recipeService.getRecipes(),
    //     { observe: 'body',
    //     params: new HttpParams().set('auth', token)
    //   // headers: header
    // });
        // const req = new HttpRequest('PUT', 'https://ng-recipebook-shoppinglist.firebaseio.com/recipes.json',
        //                     this.recipeService.getRecipes(), {reportProgress: true, params: new HttpParams().set('auth', token)});
        // return this.httpClient.request(req);

        // With interceptor
        const req = new HttpRequest('PUT', 'https://ng-recipebook-shoppinglist.firebaseio.com/recipes.json',
        this.recipeService.getRecipes(), {reportProgress: true});
return this.httpClient.request(req);
    }

    fetchRecipes() {
        const token = this.authService.getToken();

        return this.httpClient.get<Recipe[]>('https://ng-recipebook-shoppinglist.firebaseio.com/recipes.json')
            .map(
                (recipes) => {
                    for (const recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    // console.log(JSON.stringify(recipes));
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
