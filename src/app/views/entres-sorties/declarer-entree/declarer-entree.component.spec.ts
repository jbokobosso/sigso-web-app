import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarerEntreeComponent } from './declarer-entree.component';

describe('DeclarerEntreeComponent', () => {
  let component: DeclarerEntreeComponent;
  let fixture: ComponentFixture<DeclarerEntreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarerEntreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarerEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
