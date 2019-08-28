import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule} from '@angular/router'
import { PersonagemListComponent } from './personagem-list.component';

describe('PersonagemListComponent', () => {
  let component: PersonagemListComponent;
  let fixture: ComponentFixture<PersonagemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagemListComponent ],
      imports: [RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
