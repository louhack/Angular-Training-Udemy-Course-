import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';
import { ShoppinglisteditComponent } from './shoppinglistedit/shoppinglistedit.component';
import { ShoppinglistComponent } from './shoppinglist.component';

@NgModule({
    declarations: [
        ShoppinglistComponent,
        ShoppinglisteditComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ]
})

export class ShoppingListModule {

}
