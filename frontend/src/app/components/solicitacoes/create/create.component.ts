import { SolicitacaoService } from './../../services/solicitacao.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  formSolicitacao: FormGroup = this.formBuilder.group({
    servico: ['', Validators.required],
    prioridade: ['', Validators.required],
    nome: ['', Validators.required],
    endereco: ['', Validators.required],
    bairro: ['', Validators.required],
    cep: ['', Validators.required]
  })

  constructor(private router: Router, private formBuilder: FormBuilder, private solicitacaoService: SolicitacaoService) { }

  ngOnInit(): void {
  }

  done(): void {
    this.solicitacaoService.create(this.formSolicitacao.value).subscribe(() => {
      this.router.navigate(['solicitacoes'])
      this.solicitacaoService.showMessage('Solicitação Criada!')
    })
  }

  back(): void {
    this.router.navigate(['solicitacoes'])
  }

}
