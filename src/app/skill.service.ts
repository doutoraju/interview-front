import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  
  private baseUrl = environment.apiUrl.concat('/api/skills/');
    
  constructor(private http: HttpClient) { }

  createSkill(skill: Object ): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, skill);
  }

  getSkillList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteSkill(idSkill: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idSkill}`, { responseType: 'text' });
  }


}
