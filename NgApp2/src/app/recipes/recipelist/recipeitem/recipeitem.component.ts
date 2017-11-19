import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input('recipeItem') recipe: Recipe;
  @Input() index: number;


  ngOnInit() {
  }

  // onSelected() {
  //  this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
