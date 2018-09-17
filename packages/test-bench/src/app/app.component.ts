import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lastClickedButton = `none`;

  handleClick(text: string): void {
    this.lastClickedButton = text;
  }

}
