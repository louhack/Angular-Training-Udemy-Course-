import { Component, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './app.header.html',
  styleUrls: ['./app.header.css']
})
export class AppHeaderComponent {
    // activeLink: String = 'Recipes';
    // @Output() linkCliked = new EventEmitter<String>();

    // onSelect(linkClicked: String) {
    //     this.activeLink = linkClicked;
    //     this.linkCliked.emit(this.activeLink);

    // }

    constructor(private dataStorageService: DataStorageService) {}

    onSaveData() {
        this.dataStorageService.storeRecipes()
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            );
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes();
    }

}
