import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { SquadService } from './squad.service';

describe('SquadService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule] 
  }));

  it('should be created', () => {
    const service: SquadService = TestBed.get(SquadService);
    expect(service).toBeTruthy();
  });
});
