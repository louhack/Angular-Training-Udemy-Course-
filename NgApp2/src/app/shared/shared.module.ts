import { NgModule } from '@angular/core';
import { DropdownDirective } from './DropdownDirective';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DropdownDirective,
    ],
    exports: [
        CommonModule,
        DropdownDirective,
    ]
})
export class SharedModule {

}
