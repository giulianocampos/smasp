import { Cadastros } from './../cadastros/create-cadastro/cadastros.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = "http://localhost:3001/cadastros"

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000, 
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  create(cadastros: Cadastros): Observable<Cadastros> {
    return this.http.post<Cadastros>(this.baseUrl, cadastros)
  }

  read(): Observable<Cadastros[]> {
    return this.http.get<Cadastros[]>(this.baseUrl)
  }
  
  readById(id: number): Observable<Cadastros> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cadastros>(url)
  }

  delete(id: number): Observable<Cadastros> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Cadastros>(url)
  }
}
