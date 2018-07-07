import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownDirective } from './shared/DropdownDirective';
import { ShoppingListService } from './shoppinglist/shopping-list.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { RecipeService } from './recipes/recipe.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shoppinglist/shoppinglist.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
