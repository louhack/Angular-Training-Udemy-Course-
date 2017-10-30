import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppinglistComponent implements OnInit {
    ingredients: Ingredient[] = [];

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
      this.ingredients = this.shoppingList.getIngredients();
      this.shoppingList.ingredientsChanged.subscribe(
          (ingredients: Ingredient[]) => {
              this.ingredients = ingredients;
          });
  }


}
