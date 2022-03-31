import { Cadastros } from './../create-cadastro/cadastros.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CadastroService } from './../../services/cadastro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-cadastro',
  templateUrl: './delete-cadastro.component.html',
  styleUrls: ['./delete-cadastro.component.scss']
})
export class DeleteCadastroComponent implements OnInit {

  formCadastro: FormGroup = this.formBuilder.group({
    id: [],
    endereco: [],
    bairro: [],
    cep: [],
    nome: [], 
    situacao: []
  })

  constructor(
    private cadastrosService: CadastroService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.cadastrosService.readById(id).subscribe(formCadastro => {
      this.formCadastro.patchValue(formCadastro)
    })
  }

  done(): void {
    this.cadastrosService.delete(this.formCadastro.value.id).subscribe(() => {
      this.cadastrosService.showMessage('Cadastro Excluído!')
      this.router.navigate(['cadastros'])
    })
  }

  back(): void {
    this.router.navigate(['cadastros'])
  }

}
