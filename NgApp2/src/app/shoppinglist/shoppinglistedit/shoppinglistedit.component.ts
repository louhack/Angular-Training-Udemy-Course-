import { Component, OnInit, Output, EventEmitter,ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {
    @ViewChild('amountInput') amountInput: ElementRef;


    constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
  }

  add(nameInput: HTMLInputElement) {
    const ingName = nameInput.value;
    const ingQuantity = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingQuantity);
    // this.ingredient.emit(new Ingredient(nameInput.value, this.amountInput.nativeElement.value));
    this.shoppingList.addIngredient(newIngredient);
  }
}
