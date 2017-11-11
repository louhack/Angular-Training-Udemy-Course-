import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[] = [];
    private subscription: Subscription;

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
      this.ingredients = this.shoppingList.getIngredients();
     this.subscription = this.shoppingList.ingredientsChanged.subscribe(
          (ingredients: Ingredient[]) => {
              this.ingredients = ingredients;
          });
  }

  ngOnDestroy() { this.subscription.unsubscribe(); }

}
