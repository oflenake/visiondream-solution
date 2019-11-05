import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';
import { environment } from '../environments/environment';

// Constant BreakpointObserver Properties
//const isXSmall = this._breakpointObserver.isMatched('(max-width: 599px)');
//const isSmall = this._breakpointObserver.isMatched('(max-width: 1023px)');
//const isMedium = this._breakpointObserver.isMatched('(max-width: 1439px)');
//const isLarge = this._breakpointObserver.isMatched('(max-width: 1919px)');
//const isXLarge = this._breakpointObserver.isMatched('(min-width: 1920px)');

//const layoutChanges = this._breakpointObserver.observe([
//  '(orientation: handset)',
//  '(orientation: tablet)',
//  '(orientation: web)',
//  '(orientation: handsetportrait)',
//  '(orientation: tabletportrait)',
//  '(orientation: webportrait)',
//  '(orientation: handsetlandscape)',
//  '(orientation: tabletlandscape)',
//  '(orientation: weblandscape)',
//]);

//layoutChanges.subscribe(result => {
//  updateMyLayoutForOrientationChange();
//});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  // Properties
  VD_SiteAppName = 'VisionDream';
  isOpened: true;
  isFixed: false;
  topGap: 60;
  bottomGap: 60;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isTablet$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Tablet)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isWeb$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Web)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  navMenuFiller = [
    { route: 'home', tittle: 'VISIONDREAM' },
    { route: 'services', tittle: 'SERVICES' },
    { route: 'portfolio', tittle: 'PORTFOLIO' },
    { route: 'contact', tittle: 'CONTACT' },
    { route: 'about', tittle: 'ABOUT' },
    { route: 'support', tittle: 'SUPPORT' },
    { route: 'register', tittle: 'REGISTER' },
    { route: 'login', tittle: 'LOGIN' }
  ];

  homeContentFiller = Array.from({ length: 5 }, () =>
    `Our vision to become a dream focuses on providing small and medium enterprises with custom 
        designed Information Communications Technology (ICT) solutions. We favour a philosophy 
        of simple, flexible and elegant solutions that add value to address business needs. We 
        pride ourselves on delivering solutions that are relevant to your business and that keep
        abreast with current technology standards.`);

  //public appName = environment.CLIENT_APP_NAME;
  //private serverSecrete = environment.SERVER_SECRETE;
  //private serverApiUrl = environment.SERVER_API_URL;

  // Constructor
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private _breakpointObserver: BreakpointObserver,
    private _Logger: NGXLogger)
  {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this._Logger.log(`[DEFAULT] - Application name is: ${this.VD_SiteAppName}`);
    //this._Logger.log(`[DEFAULT] - Application name is: ${this.appName}`);
    //this._Logger.log(`[DEFAULT] - Server secrete is: ${this.serverSecrete}`);
    //this._Logger.log(`[DEFAULT] - Server base api url is: ${this.serverApiUrl}`);
    //this._Logger.debug('DEBUG message...');
    //this._Logger.info('INFO message');
    //this._Logger.log(`DEFAULT log message. App name: ${environment.CLIENT_APP_NAME}`);
    //this._Logger.warn('WARNING message');
    //this._Logger.error('ERROR message');
    //this._Logger.fatal('FATAL message');
    //this._Logger.trace('TRACE message');
  }

  // Initialize
  ngOnInit() {
  }

  // Housekeeping
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
