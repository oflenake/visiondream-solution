import { MediaMatcher, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { VDBuildVersionModel } from 'projects/visiondream-site/src/app/shared/models/vd-buildversion-model';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

// Icons - Side Navigation (includes: vdFaEnvelope, vdFaUser, vdFaSignInAlt)
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

// Icons - Brands
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export interface SidenavItems {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {

  // Properties
  @Output() sidenavClose = new EventEmitter();
  VDBuildVersionModel: VDBuildVersionModel;

  rippleCentered = false;
  rippleDisabled = false;
  rippleUnbounded = false;
  rippleRadius: number;
  rippleColor: string;

  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  // Icons - Side Navigation (includes: vdFaEnvelope, vdFaUser, vdFaSignInAlt)
  vdFaHome = faHome;
  vdFaClipboardList = faClipboardList;
  vdFaArchive = faArchive;
  vdFaAngleUp = faAngleUp;
  vdFaAngleDown = faAngleDown;
  vdFaCaretDown = faCaretDown;
  vdFaEnvelope = faEnvelope;
  vdFaQuestionCircle = faQuestionCircle;
  vdFaUser = faUser;
  vdFaSignInAlt = faSignInAlt;
  vdFaSort = faSort;
  vdFaInfoCircle = faInfoCircle;

  // Icons - Brands
  vdFaFacebook = faFacebook;
  vdFaTwitter = faTwitter;
  vdFaLinkedin = faLinkedin;
  vdFaGithub = faGithub;

  // Sidenav links
  folders: SidenavItems[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: SidenavItems[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isTablet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isWeb$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Web)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  // Constructor
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private breakpointObserver: BreakpointObserver)
  {
    this.VDBuildVersionModel = new VDBuildVersionModel();

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  // Initialize
  ngOnInit() {
  }

  // Function Methods - onSidenavClose function
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  // Housekeeping
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

}
