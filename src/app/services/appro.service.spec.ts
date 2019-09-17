import { TestBed } from '@angular/core/testing';

import { ApproService } from './appro.service';

describe('ApproService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApproService = TestBed.get(ApproService);
    expect(service).toBeTruthy();
  });
});
