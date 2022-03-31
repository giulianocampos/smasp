import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSolicitacaoComponent } from './delete-solicitacao.component';

describe('DeleteSolicitacaoComponent', () => {
  let component: DeleteSolicitacaoComponent;
  let fixture: ComponentFixture<DeleteSolicitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSolicitacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSolicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
