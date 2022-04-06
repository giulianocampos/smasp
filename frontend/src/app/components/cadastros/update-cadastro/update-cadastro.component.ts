import { CadastroService } from './../../services/cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-cadastro',
  templateUrl: './update-cadastro.component.html',
  styleUrls: ['./update-cadastro.component.scss']
})
export class UpdateCadastroComponent implements OnInit {

  formCadastro: FormGroup = this.formBuilder.group({
    id: [],
    endereco: [],
    bairro: [],
    cep: [],
    nome: [], 
    situacao: []
  })

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,
    private cadastroService: CadastroService,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.cadastroService.readById(id).subscribe(formCadastro => {
      this.formCadastro.patchValue(formCadastro)
    })
  }

  done(): void {
    this.cadastroService.update(this.formCadastro.value).subscribe(() => {
      this.cadastroService.showMessage('Cadastro Atualizado!')
      this.router.navigate(['cadastros'])
    })
  }

  back(): void {
    this.router.navigate(['cadastros'])
  }

}
