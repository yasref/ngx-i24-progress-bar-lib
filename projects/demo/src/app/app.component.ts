import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  htmlPercentage = 75;
  cssPercentage = 83;
  jsPercentage = 34;
  color = '#ddd';
  progressBackColor = '#333'
}
