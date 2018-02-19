import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipesComponent } from './recipes.component';
import { AuthGuard } from '../auth/auth-guard.service';

const recipesRoutes: Routes = [
    {
        path: '', component: RecipesComponent, children: [
          { path: '', component: RecipesStartComponent },
          { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
          { path: ':id', component: RecipesDetailsComponent },
          { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
       ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule { }
