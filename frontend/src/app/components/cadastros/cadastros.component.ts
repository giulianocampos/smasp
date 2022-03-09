import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.scss']
})
export class CadastrosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  add(): void {
    this.router.navigate(['cadastros/criar'])
  }

}
