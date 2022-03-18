import { Cadastros } from './../cadastros/create-cadastro/cadastros.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = "http://localhost:3001/cadastros"

  constructor(private http: HttpClient) { }


  create(cadastros: Cadastros): Observable<Cadastros> {
    return this.http.post<Cadastros>(this.baseUrl, cadastros)
  }
}
