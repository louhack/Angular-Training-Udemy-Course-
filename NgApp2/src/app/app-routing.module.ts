import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppinglistComponent } from "./shoppinglist/shoppinglist.component";
import { RecipesComponent } from "./recipes/recipes.component";

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: 'shoppinglist', component: ShoppinglistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
