import { Component } from '@angular/core';
import {
    faFacebook, faGithub, faLinkedinIn, faTwitter, faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Envelope';
  leftSideNavOpened = true;
  rightSideNavOpened = true;

  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faBars = faBars;

  toggleLeftSidenav() {
    this.leftSideNavOpened = !this.leftSideNavOpened;
  }
}
