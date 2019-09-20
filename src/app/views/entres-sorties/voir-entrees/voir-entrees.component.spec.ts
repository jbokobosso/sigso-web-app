import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirEntreesComponent } from './voir-entrees.component';

describe('VoirEntreesComponent', () => {
  let component: VoirEntreesComponent;
  let fixture: ComponentFixture<VoirEntreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirEntreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirEntreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
