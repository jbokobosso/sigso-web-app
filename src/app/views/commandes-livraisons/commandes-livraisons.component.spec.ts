import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesLivraisonsComponent } from './commandes-livraisons.component';

describe('CommandesLivraisonsComponent', () => {
  let component: CommandesLivraisonsComponent;
  let fixture: ComponentFixture<CommandesLivraisonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandesLivraisonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandesLivraisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
