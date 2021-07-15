import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { fader, slider } from './animations/route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider],
})
export class AppComponent {
  title = 'Epicure';
  innerWidth = window.innerWidth;

  prepareRoute(outlet: RouterOutlet) {
    return (
      this.innerWidth < 960 &&
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
