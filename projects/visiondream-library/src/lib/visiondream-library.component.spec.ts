import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiondreamLibraryComponent } from './visiondream-library.component';

describe('VisiondreamLibraryComponent', () => {
  let component: VisiondreamLibraryComponent;
  let fixture: ComponentFixture<VisiondreamLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisiondreamLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiondreamLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
