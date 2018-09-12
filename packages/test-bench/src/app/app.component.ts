import { Component } from '@angular/core';

import { Greeter } from 'protractor-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-bench ' + new Greeter('x').greet();
}
