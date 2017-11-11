import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app.header.html',
  styleUrls: ['./app.header.css']
})
export class AppHeaderComponent {
    activeLink: String = 'Recipes';
    @Output() linkCliked = new EventEmitter<String>();

    onSelect(linkClicked: String) {
        this.activeLink = linkClicked;
        this.linkCliked.emit(this.activeLink);

    }

}
