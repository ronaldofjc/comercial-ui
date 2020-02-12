import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OportunidadeService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = 'http://localhost:8080/oportunidades';

  listar() {
    return this.httpClient.get(this.apiUrl);
  }

  adicionar(oportunidade: any) {
    return this.httpClient.post(this.apiUrl, oportunidade);
  }
}
