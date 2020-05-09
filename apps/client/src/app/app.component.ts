import { Subscription } from 'rxjs';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy } from '@angular/core';
import {
    faFacebook, faGithub, faLinkedinIn, faTwitter, faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faBars, faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'Envelope';

  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faBars = faBars;
  faFilter = faFilter;

  leftSideNavOpened = true;
  rightSideNavOpened = true;
  sidenavMode = 'side';
  gtSmSub: Subscription;
  ltMdSub: Subscription;

  constructor(breakpointObserver: BreakpointObserver) {

    this.gtSmSub = breakpointObserver.observe([
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        console.log(result, 'gt-sm');
        this.leftSideNavOpened = true;
        this.rightSideNavOpened = true;
        this.sidenavMode = 'side';
      }
    });

    this.ltMdSub = breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        console.log(result, 'lt-md');
        this.leftSideNavOpened = false;
        this.rightSideNavOpened = false;
        this.sidenavMode = 'over';
      }
    });
  }

  ngOnDestroy() {
    this.gtSmSub.unsubscribe();
    this.ltMdSub.unsubscribe();
  }

  toggleLeftSidenav() {
    this.leftSideNavOpened = !this.leftSideNavOpened;
  }
}
