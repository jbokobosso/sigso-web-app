import { TestBed } from '@angular/core/testing';

import { EntreesSortiesService } from './entrees-sorties.service';

describe('EntreesSortiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntreesSortiesService = TestBed.get(EntreesSortiesService);
    expect(service).toBeTruthy();
  });
});
