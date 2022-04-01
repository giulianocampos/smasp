import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSolicitacaoComponent } from './update-solicitacao.component';

describe('UpdateSolicitacaoComponent', () => {
  let component: UpdateSolicitacaoComponent;
  let fixture: ComponentFixture<UpdateSolicitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSolicitacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSolicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
