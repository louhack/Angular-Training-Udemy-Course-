import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipelistComponent } from "./recipes/recipelist/recipelist.component";
import { ShoppinglistComponent } from "./shoppinglist/shoppinglist.component";

const routes: Routes = [
  { path: 'recipes', component: RecipelistComponent },
  { path: 'shoppinglist', component: ShoppinglistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
