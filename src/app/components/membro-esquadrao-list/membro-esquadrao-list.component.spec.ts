import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MembroEsquadraoListComponent } from './membro-esquadrao-list.component';

describe('MembroEsquadraoListComponent', () => {
  let component: MembroEsquadraoListComponent;
  let fixture: ComponentFixture<MembroEsquadraoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembroEsquadraoListComponent ],
      imports: [RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembroEsquadraoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
