import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFournComponent } from './ajouter-fourn.component';

describe('AjouterFournComponent', () => {
  let component: AjouterFournComponent;
  let fixture: ComponentFixture<AjouterFournComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterFournComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterFournComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
