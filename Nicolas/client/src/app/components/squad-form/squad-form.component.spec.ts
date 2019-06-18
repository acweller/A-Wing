import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadFormComponent } from './squad-form.component';

describe('SquadFormComponent', () => {
  let component: SquadFormComponent;
  let fixture: ComponentFixture<SquadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
