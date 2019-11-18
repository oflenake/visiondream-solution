import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SowetoTutorComponent } from './soweto-tutor.component';

describe('SowetoTutorComponent', () => {
  let component: SowetoTutorComponent;
  let fixture: ComponentFixture<SowetoTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SowetoTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SowetoTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
