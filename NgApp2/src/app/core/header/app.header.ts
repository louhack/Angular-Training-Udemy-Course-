import { Component, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';
// import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './app.header.html',
  styleUrls: ['./app.header.css']
})
export class AppHeaderComponent {

    constructor(private dataStorageService: DataStorageService,
            private authService: AuthService) {}

    onSaveData() {
        this.dataStorageService.storeRecipes()
            .subscribe(
                (response) => {
                   console.log(response);
                }
            );
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes();
    }

    onLogout() {
        this.authService.logout();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
      }

}
