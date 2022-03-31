import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Solicitacoes } from './../solicitacoes/create/solicitacoes.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  baseUrl = "http://localhost:3001/solicitacoes"

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  create(solicitacoes: Solicitacoes): Observable<Solicitacoes> {
    return this.http.post<Solicitacoes>(this.baseUrl, solicitacoes)
  }

  read(): Observable<Solicitacoes[]> {
    return this.http.get<Solicitacoes[]>(this.baseUrl)
  }

  readById(id: number): Observable<Solicitacoes> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Solicitacoes>(url)
  }

  delete(id: number): Observable<Solicitacoes> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Solicitacoes>(url)
  }
}
