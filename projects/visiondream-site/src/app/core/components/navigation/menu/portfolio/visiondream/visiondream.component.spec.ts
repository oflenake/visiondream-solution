import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionDreamComponent } from './visiondream.component';

describe('VisionDreamComponent', () => {
  let component: VisionDreamComponent;
  let fixture: ComponentFixture<VisionDreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisionDreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisionDreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
