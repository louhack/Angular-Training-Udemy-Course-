import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppinglistComponent } from "./shoppinglist/shoppinglist.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipesStartComponent } from "./recipes/recipes-start/recipes-start.component";
import { RecipesDetailsComponent } from "./recipes/recipes-details/recipes-details.component";

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipesStartComponent },
      { path: ':id', component: RecipesDetailsComponent }
   ]},
  { path: 'shoppinglist', component: ShoppinglistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
