import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { SquadFormComponent } from './squad-form.component';

describe('SquadFormComponent', () => {
  let component: SquadFormComponent;
  let fixture: ComponentFixture<SquadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadFormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
