import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CadastroService } from './../services/cadastro.service';
import { Cadastros } from './create-cadastro/cadastros.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.scss']
})
export class CadastrosComponent implements OnInit {

  cadastros: Cadastros[];

  constructor(private router: Router,
    private cadastrosService: CadastroService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cadastrosService.read().subscribe(cadastros => {
      this.cadastros = cadastros
      console.log(cadastros)
    });
  }

  add(): void {
    this.router.navigate(['cadastros/criar'])
  }
}
