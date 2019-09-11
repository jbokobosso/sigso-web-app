import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntresSortiesComponent } from './entres-sorties.component';

describe('EntresSortiesComponent', () => {
  let component: EntresSortiesComponent;
  let fixture: ComponentFixture<EntresSortiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntresSortiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntresSortiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
