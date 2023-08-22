import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl: string ='https://localhost:7020/api/Clientes';

  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get(this.baseUrl);

  }
}
