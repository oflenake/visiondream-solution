import { ChangeDetectorRef, Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

// Icons - Main Navigation
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

// Icons - Brands
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit, OnDestroy {

  // Properties
  VD_SiteAppName = 'VisionDream';
  @Output() public sidenavToggle = new EventEmitter();
  isOpened: boolean;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  // Icons - Main Navigation
  vdFaBars = faBars;
  vdFaAngleDown = faAngleDown;
  vdFaEnvelope = faEnvelope;
  vdFaUser = faUser;
  vdFaUserCircle = faUserCircle;
  vdFaSignInAlt = faSignInAlt;
  vdFaQuestionCircle = faQuestionCircle;
  vdFaWrench = faWrench;
  vdFaCog = faCog;
  vdFaCogs = faCogs;

  // Icons - Brands
  vdFaFacebook = faFacebook;
  vdFaTwitter = faTwitter;
  vdFaGithub = faGithub;

  // Constructor
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  // Initialize
  ngOnInit() {
  }

  // Destroy / Housekeeping
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  // Function Methods - onToggleSidenav function
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
