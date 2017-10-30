import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
    recipeItems: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeItems = this.recipeService.getRecipes();
  }


}
