import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import { MembroEsquadraoService } from './membro-esquadrao.service';

describe('MembroEsquadraoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: MembroEsquadraoService = TestBed.get(MembroEsquadraoService);
    expect(service).toBeTruthy();
  });
});
