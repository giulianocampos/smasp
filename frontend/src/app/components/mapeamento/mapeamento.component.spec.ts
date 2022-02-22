import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapeamentoComponent } from './mapeamento.component';

describe('MapeamentoComponent', () => {
  let component: MapeamentoComponent;
  let fixture: ComponentFixture<MapeamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapeamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapeamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
