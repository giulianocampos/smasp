import { HttpClient } from '@angular/common/http';
import { CadastroService } from './../services/cadastro.service';
import { Cadastros } from './create-cadastro/cadastros.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.scss']
})
export class CadastrosComponent implements OnInit {

  cadastros: Cadastros[];

  constructor(private router: Router, private cadastrosService: CadastroService, http: HttpClient) { }

  ngOnInit(): void {
    this.cadastrosService.read().subscribe(cadastros => {
      this.cadastros = cadastros
      console.log(cadastros)
    })
  }

  add(): void {
    this.router.navigate(['cadastros/criar'])
  }

  delete(): void {
    Swal.fire({
      width: '400px',
      title: 'Você tem certeza?',
      text: "Você não poderá reverter a exclusão!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      confirmButtonColor: 'green',
      cancelButtonText: 'Não, cancelar!',
      cancelButtonColor: '#e42929',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          width: '400px',
          title: 'Sucesso!',
          text: 'Cadastro Excluído',
          icon: 'success',
          confirmButtonText: 'Ok',
          confirmButtonColor: 'green'
        })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: 'Operação Cancelada',
          icon: 'success',
          confirmButtonText: 'Ok',
          confirmButtonColor: 'green'
        })
      }
    })
  }


}
