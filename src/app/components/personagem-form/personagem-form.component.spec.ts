import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { PersonagemFormComponent } from './personagem-form.component';

describe('PersonagemFormComponent', () => {
  let component: PersonagemFormComponent;
  let fixture: ComponentFixture<PersonagemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagemFormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
