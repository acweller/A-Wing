import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule} from '@angular/router';
import { SquadListComponent } from './squad-list.component';

describe('SquadListComponent', () => {
  let component: SquadListComponent;
  let fixture: ComponentFixture<SquadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadListComponent ],
      imports: [RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
