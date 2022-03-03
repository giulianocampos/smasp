import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.scss']
})
export class SolicitacoesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  add(): void {
    this.router.navigate(['solicitacoes/criar'])
  }
}
