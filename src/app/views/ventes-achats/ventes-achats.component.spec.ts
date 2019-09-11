import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentesAchatsComponent } from './ventes-achats.component';

describe('VentesAchatsComponent', () => {
  let component: VentesAchatsComponent;
  let fixture: ComponentFixture<VentesAchatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentesAchatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentesAchatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
