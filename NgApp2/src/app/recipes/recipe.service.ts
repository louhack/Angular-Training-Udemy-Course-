import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shoppinglist/shopping-list.service";

@Injectable()
export class RecipeService {
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

  recipeSelected = new EventEmitter<Recipe>();


  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipeItems.slice();
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
