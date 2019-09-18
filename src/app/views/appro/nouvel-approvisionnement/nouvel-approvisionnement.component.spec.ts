import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelApprovisionnementComponent } from './nouvel-approvisionnement.component';

describe('NouvelApprovisionnementComponent', () => {
  let component: NouvelApprovisionnementComponent;
  let fixture: ComponentFixture<NouvelApprovisionnementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelApprovisionnementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelApprovisionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
