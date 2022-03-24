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

  delete(): void {
    Swal.fire({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    Swal.fire({
      width: '400px',
      title: 'Você tem certeza?',
      text: "Você não poderá reverter a exclusão!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Não, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Excluído!',
          'O cadastro foi deletado!',
          'success',
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Operação cancelada!'
        )
      }
    })
  }

  add(): void {
    this.router.navigate(['cadastros/criar'])
  }

}
