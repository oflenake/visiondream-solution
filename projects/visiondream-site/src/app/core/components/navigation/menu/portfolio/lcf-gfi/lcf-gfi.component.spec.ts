import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcfGfiComponent } from './lcf-gfi.component';

describe('LcfGfiComponent', () => {
  let component: LcfGfiComponent;
  let fixture: ComponentFixture<LcfGfiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcfGfiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcfGfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
