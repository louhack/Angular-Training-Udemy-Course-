import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit, OnDestroy {
    recipeItems: Recipe[] = [];
    recipeSubscription: Subscription;

    constructor(private recipeService: RecipeService,
      private router: Router,
      private route: ActivatedRoute,
      private dataStorageService: DataStorageService,
      private authService: AuthService) { }

  ngOnInit() {
    // console.log('onInit RecipeList');
    if (this.authService.isAuthenticated()) {
      this.dataStorageService.fetchRecipes();
    }
    this.recipeItems = this.recipeService.getRecipes();

    this.recipeSubscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipeItems = recipes;
      }
    );
  }

  ngOnDestroy() { this.recipeSubscription.unsubscribe(); }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
