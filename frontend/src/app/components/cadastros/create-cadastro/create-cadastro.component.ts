import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-cadastro',
  templateUrl: './create-cadastro.component.html',
  styleUrls: ['./create-cadastro.component.scss']
})
export class CreateCadastroComponent implements OnInit {

  formCadastro: FormGroup = this.formBuilder.group({
    nome: ['', Validators.required],
    endereco: ['', Validators.required],
    bairro: ['', Validators.required],
    cep: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}