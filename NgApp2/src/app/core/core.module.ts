import { NgModule } from '@angular/core';
import { AppHeaderComponent } from '../core/header/app.header';
import { HomeComponent } from '../core/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ShoppingListService } from '../shoppinglist/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';

@NgModule({
    declarations: [
        AppHeaderComponent,
        HomeComponent,
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
    ],
    exports: [
        AppRoutingModule,
        AppHeaderComponent,
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        DataStorageService,
        AuthService,
      ],
})
export class CoreModule {

}
