import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from '../cadastros/model/cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  apiUrl: string = 'http://localhost:8081/api/cidade';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.apiUrl);
  }
}
