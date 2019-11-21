import { ChangeDetectorRef, Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { VDBuildVersionModel } from 'projects/visiondream-site/src/app/shared/models/vd-buildversion-model';

// Icons - Main Navigation
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
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
  @Output() public sidenavToggle = new EventEmitter();
  VDBuildVersionModel: VDBuildVersionModel;

  rippleCentered = false;
  rippleDisabled = false;
  rippleUnbounded = false;
  rippleRadius: number;
  rippleColor: string;

  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  // Icons - Main Navigation
  vdFaBars = faBars;
  vdFaCaretDown = faCaretDown;
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
    this.VDBuildVersionModel = new VDBuildVersionModel();

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  // Initialize
  ngOnInit() {
  }

  // Destroy / Housekeeping
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  // Function Methods - onToggleSidenav function
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
