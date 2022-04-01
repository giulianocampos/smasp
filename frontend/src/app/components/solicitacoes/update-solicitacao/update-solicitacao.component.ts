import { Solicitacoes } from './../create/solicitacoes.model';
import { SolicitacaoService } from './../../services/solicitacao.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-solicitacao',
  templateUrl: './update-solicitacao.component.html',
  styleUrls: ['./update-solicitacao.component.scss']
})
export class UpdateSolicitacaoComponent implements OnInit {

  formSolicitacao: FormGroup = this.formBuilder.group({
    id: ['', Validators.required],
    servico: ['', Validators.required],
    prioridade: ['', Validators.required],
    nome: ['', Validators.required],
    endereco: ['', Validators.required],
    bairro: ['', Validators.required],
    cep: ['', Validators.required]
  })

  solicitacoes: Solicitacoes[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private solicitacaoService: SolicitacaoService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.solicitacaoService.readById(id).subscribe(formSolicitacao => {
      this.formSolicitacao.patchValue(formSolicitacao);
    })
  }

  done(): void {
    this.solicitacaoService.update(this.formSolicitacao.value).subscribe(() => {
      this.solicitacaoService.showMessage('Solicitação Atualizada!')
      this.router.navigate(['solicitacoes'])
    })
  }

  back(): void {
    this.router.navigate(['solicitacoes'])
  }

}
