import { TestBed } from '@angular/core/testing';

import { MembroEsquadraoService } from './membro-esquadrao.service';

describe('MembroEsquadraoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MembroEsquadraoService = TestBed.get(MembroEsquadraoService);
    expect(service).toBeTruthy();
  });
});
