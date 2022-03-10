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
    nome: ['', Validators.required],
    endereco: ['', Validators.required],
    bairro: ['', Validators.required],
    cep: ['', Validators.required]
  })

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  done(): void {
    console.log("está funfando")
  }

  back(): void {
    this.router.navigate(['solicitacoes'])
  }

}
