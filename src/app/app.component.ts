import { Component } from '@angular/core';
import {
  faFacebook,
  faYoutube,
  faLinkedinIn,
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'envelope-client';

  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faTwitter = faTwitter;
}
