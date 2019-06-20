import { TestBed } from '@angular/core/testing';

import { StarshiptypesService } from './starshiptypes.service';

describe('StarshiptypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarshiptypesService = TestBed.get(StarshiptypesService);
    expect(service).toBeTruthy();
  });
});
