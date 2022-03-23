import { Solicitacoes } from './../solicitacoes/create/solicitacoes.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  baseUrl = "http://localhost:3001/solicitacoes"

  constructor(private http: HttpClient) { }

  create(solicitacoes: Solicitacoes): Observable<Solicitacoes> {
    return this.http.post<Solicitacoes>(this.baseUrl, solicitacoes)
  }

  read(): Observable<Solicitacoes[]> {
    return this.http.get<Solicitacoes[]>(this.baseUrl)
  }
}
 