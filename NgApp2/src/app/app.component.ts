import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyDWy5yqH3Rxd7DvVJ_6_nQK1BT_yEStzKU',
      authDomain: 'ng-recipebook-shoppinglist.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
    // componentDisplayed: String = 'Recipes';

    // componentToShow(linkCliked: String) {
    //    this.componentDisplayed = linkCliked;
    // }
}
