import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.scss']
})
export class SolicitacoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    console.log("Olá, mantenha o proceder")
  }

}
