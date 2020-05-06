import { Component } from '@angular/core';
import {
    faFacebook, faGithub, faLinkedinIn, faTwitter, faYoutube
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'envelope-client';
  opened = true;

  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faTwitter = faTwitter;
}
