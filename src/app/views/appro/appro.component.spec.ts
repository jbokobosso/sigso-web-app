import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproComponent } from './appro.component';

describe('ApproComponent', () => {
  let component: ApproComponent;
  let fixture: ComponentFixture<ApproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
