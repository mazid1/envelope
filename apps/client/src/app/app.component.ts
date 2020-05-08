import { Subscription } from 'rxjs';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy } from '@angular/core';
import {
    faFacebook, faGithub, faLinkedinIn, faTwitter, faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Envelope';
  leftSideNavOpened = true;
  rightSideNavOpened = true;

  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faBars = faBars;

  gtSmSub: Subscription;
  smSub: Subscription;
  xsSub: Subscription;

  constructor(breakpointObserver: BreakpointObserver) {

    this.gtSmSub = breakpointObserver.observe([
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        console.log(result, 'gt-sm');
        this.leftSideNavOpened = true;
      }
    });

    this.smSub = breakpointObserver.observe([
      Breakpoints.Small
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        console.log(result, 'sm');
        this.leftSideNavOpened = false;
      }
    });

    this.xsSub = breakpointObserver.observe([
      Breakpoints.XSmall
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        console.log(result, 'xs');
        this.leftSideNavOpened = false;
      }
    });
  }

  ngOnDestroy() {
    this.gtSmSub.unsubscribe();
    this.smSub.unsubscribe();
    this.xsSub.unsubscribe();
  }

  toggleLeftSidenav() {
    this.leftSideNavOpened = !this.leftSideNavOpened;
  }

  loadMobileContent() { }
}
