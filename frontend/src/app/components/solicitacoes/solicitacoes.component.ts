import { Solicitacoes } from './create/solicitacoes.model';
import { SolicitacaoService } from './../services/solicitacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.scss']
})
export class SolicitacoesComponent implements OnInit {

  solicitacoes: Solicitacoes[];

  constructor(private router: Router, private solicitacaoService: SolicitacaoService) { }

  ngOnInit(): void {
    this.solicitacaoService.read().subscribe(solicitacoes => {
      this.solicitacoes = solicitacoes
    })
  }

  add(): void {
    this.router.navigate(['solicitacoes/criar'])
  }
}
