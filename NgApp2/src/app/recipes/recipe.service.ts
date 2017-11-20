import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipeItems: Recipe[] = [
      new Recipe('Broccoli Rabe & Chicken White Pizza',
      'The bold flavors of garlic, crushed red pepper and lemon make up for the fact that this white chicken pizza recipe has less sodium than a typical pizza. Not a fan of bitter greens? Opt for broccolini or broccoli instead. To save time, look for prepared whole-wheat pizza dough at your supermarket, fresh or frozen, made without partially hydrogenated oils.',
      'http://images.media-allrecipes.com/userphotos/960x960/3758523.jpg',
      [
          new Ingredient('pound whole-wheat pizza dough', 1),
          new Ingredient('ounces boneless, skinless chicken breast, trimmed', 12),
          new Ingredient('cups chopped broccolini or broccoli', 4)

      ]),
    new Recipe('Nut & Berry Parfait',
      'In this quick high-protein breakfast recipe, Greek yogurt is topped with healthy berries and almonds and lightly sweetened with honey.',
      'http://images.media-allrecipes.com/userphotos/960x960/3758688.jpg',
      [
          new Ingredient('cup nonfat plain Greek yogurt', 1),
          new Ingredient('cup fresh or frozen raspberries', 1),
          new Ingredient('cup fresh or frozen blueberries', 1)
      ])
  ];


  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipeItems.slice();
  }

  getRecipe(index: number) {
    return this.recipeItems[index];
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(newRecipe: Recipe) {
    this.recipeItems.push(newRecipe);
    this.recipesChanged.next(this.recipeItems.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipeItems[index] = newRecipe;
    this.recipesChanged.next(this.recipeItems.slice());
  }

  deleteRecipe(index: number) {
    this.recipeItems.splice(index, 1);
    this.recipesChanged.next(this.recipeItems.slice());
  }

  loadRecipesFromDB(recipes: Recipe[]) {
    this.recipeItems = recipes;
    this.recipesChanged.next(this.recipeItems.slice());
  }
}
