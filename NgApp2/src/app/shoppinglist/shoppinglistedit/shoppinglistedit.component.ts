import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
   this.subscription = this.shoppingList.startedEditing.subscribe(
     (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingList.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          quantity: this.editedItem.quantity
        });
     }
   );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.quantity);
    if (this.editMode) {
      this.shoppingList.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingList.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset();
    // this.ingredient.emit(new Ingredient(nameInput.value, this.quantityInput.nativeElement.value));
  }

  resetForm() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
      this.shoppingList.deleteItem(this.editedItemIndex);
      this.resetForm();
  }
}
