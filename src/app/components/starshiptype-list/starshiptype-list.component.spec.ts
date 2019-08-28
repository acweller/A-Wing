import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule} from '@angular/router'
import { StarshiptypeListComponent } from './starshiptype-list.component';

describe('StarshiptypeListComponent', () => {
  let component: StarshiptypeListComponent;
  let fixture: ComponentFixture<StarshiptypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshiptypeListComponent ],
      imports: [RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshiptypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
