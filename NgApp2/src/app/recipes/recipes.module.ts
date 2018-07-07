import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeitemComponent } from './recipelist/recipeitem/recipeitem.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipesStartComponent,
        RecipelistComponent,
        RecipeEditComponent,
        RecipeitemComponent,
        RecipesDetailsComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule,
    ]
})

export class RecipesModule {

}
