import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from '../cadastros/model/cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  apiURL: string = 'http://localhost:8081/api/cidade';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.apiURL);
  }

  getById(id: number): Observable<Cidade> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  delete(cidade: Cidade): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${cidade.id}`);
  }

  insert(cidade: Cidade): Observable<any> {
    return this.http.post<Cidade>(this.apiURL, cidade);
  }

  update(cidade: Cidade): Observable<any> {
    return this.http.put<Cidade>(this.apiURL, cidade);
  }
}
