import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  private baseUrl = environment.apiUrl.concat('/api/professionals/');
  
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

