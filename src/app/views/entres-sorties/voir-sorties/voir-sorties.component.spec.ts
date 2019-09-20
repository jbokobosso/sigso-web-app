import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirSortiesComponent } from './voir-sorties.component';

describe('VoirSortiesComponent', () => {
  let component: VoirSortiesComponent;
  let fixture: ComponentFixture<VoirSortiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirSortiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirSortiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
