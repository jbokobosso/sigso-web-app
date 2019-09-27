import { TestBed } from '@angular/core/testing';

import { CommandesLivraisonsService } from './commandes-livraisons.service';

describe('CommandesLivraisonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommandesLivraisonsService = TestBed.get(CommandesLivraisonsService);
    expect(service).toBeTruthy();
  });
});
