import { Router, ActivatedRoute } from '@angular/router';
import { SolicitacaoService } from './../../services/solicitacao.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-solicitacao',
  templateUrl: './delete-solicitacao.component.html',
  styleUrls: ['./delete-solicitacao.component.scss']
})
export class DeleteSolicitacaoComponent implements OnInit {

  formSolicitacao: FormGroup = this.formBuilder.group({
    id: ['', Validators.required],
    servico: ['', Validators.required],
    prioridade: ['', Validators.required],
    nome: ['', Validators.required],
    endereco: ['', Validators.required],
    bairro: ['', Validators.required],
    cep: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private solicitacaoService: SolicitacaoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.solicitacaoService.readById(id).subscribe(formSolicitacao => {
      this.formSolicitacao.patchValue(formSolicitacao)
    })
  }

  done(): void {
    this.solicitacaoService.delete(this.formSolicitacao.value.id).subscribe(() => {
      this.solicitacaoService.showMessage('Solicitação Excluída!')
      this.router.navigate(['solicitacoes'])
    })
  }

  back(): void {
    this.router.navigate(['solicitacoes'])
  }

}
