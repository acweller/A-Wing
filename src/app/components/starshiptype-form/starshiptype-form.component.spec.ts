import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { StarshiptypeFormComponent } from './starshiptype-form.component';

describe('StarshiptypeFormComponent', () => {
  let component: StarshiptypeFormComponent;
  let fixture: ComponentFixture<StarshiptypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshiptypeFormComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshiptypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
