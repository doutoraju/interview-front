import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  private baseUrl = '/api/professionals/';
  
  constructor(private http: HttpClient) { }

  createProfessional(professional: Object ): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, professional);
  }

  getProfessionalList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteProfessional(idProfessional: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idProfessional}`, { responseType: 'text' });
  }

}

