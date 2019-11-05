import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { SupportComponent } from './support.component';

describe('SupportComponent', () => {
  let component: SupportComponent;
  let fixture: ComponentFixture<SupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportComponent ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
