import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarerSortieComponent } from './declarer-sortie.component';

describe('DeclarerSortieComponent', () => {
  let component: DeclarerSortieComponent;
  let fixture: ComponentFixture<DeclarerSortieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarerSortieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarerSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
