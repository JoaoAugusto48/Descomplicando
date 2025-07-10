import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cep } from './ceps';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private readonly API = "https://viacep.com.br/ws/{cep}/json/";

  constructor(private http: HttpClient) { }

  buscarPorCEP(cep: string): Observable<Cep> {
    const url = this.API.replace('{cep}', cep);
    return this.http.get<Cep>(url);
  }
}
