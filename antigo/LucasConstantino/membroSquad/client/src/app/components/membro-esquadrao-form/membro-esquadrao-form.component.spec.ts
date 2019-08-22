import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembroEsquadraoFormComponent } from './membro-esquadrao-form.component';

describe('MembroEsquadraoFormComponent', () => {
  let component: MembroEsquadraoFormComponent;
  let fixture: ComponentFixture<MembroEsquadraoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembroEsquadraoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembroEsquadraoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
